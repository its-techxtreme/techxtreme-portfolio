# Capture current browser tab for QA when kimi-webbridge screenshot hangs.
# Requires: kimi-webbridge daemon running + extension connected.
# Usage: .\scripts\capture-page.ps1 -Output ".screenshots/page.pdf"

param(
    [string]$Output = ".screenshots/page.pdf",
    [string]$Session = "portfolio-qa",
    [ValidateSet("pdf", "screenshot")]
    [string]$Format = "pdf"
)

$absOutput = Join-Path (Get-Location) $Output
$dir = Split-Path $absOutput -Parent
if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

$status = & "$env:USERPROFILE\.kimi-webbridge\bin\kimi-webbridge" status | ConvertFrom-Json
if (-not $status.running -or -not $status.extension_connected) {
    Write-Error "kimi-webbridge not healthy. Run: ~/.kimi-webbridge/bin/kimi-webbridge status"
    exit 1
}

if ($status.extension_version -ne $status.version) {
    Write-Warning "Extension ($($status.extension_version)) != daemon ($($status.version)). Update extension: https://kimi.com/features/webbridge"
}

$path = $absOutput -replace '\\', '/'
if ($Format -eq "pdf") {
    $body = @{ action = "save_as_pdf"; args = @{ path = $path; print_background = $true }; session = $Session } | ConvertTo-Json -Compress
} else {
    $body = @{ action = "screenshot"; args = @{ path = $path; format = "png" }; session = $Session } | ConvertTo-Json -Compress
}

$result = Invoke-RestMethod -Uri "http://127.0.0.1:10086/command" -Method POST -ContentType "application/json" -Body $body -TimeoutSec 120
$result | ConvertTo-Json -Depth 5
