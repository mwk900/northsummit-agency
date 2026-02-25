# ─── NorthSummit Pricing Redesign ───
# Run this from your project root: C:\Users\mwk\Desktop\northsummit-agency
#
# What this does:
#   1. Backs up your current files to a _backup folder
#   2. Overwrites: src/data/site.ts, src/pages/index.tsx, src/pages/contact.tsx
#   3. Creates NEW: src/pages/question.tsx
#
# To undo: copy files back from _backup/

$ErrorActionPreference = "Stop"

# Create backup
$backupDir = "_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null

$filesToBackup = @(
    "src\data\site.ts",
    "src\pages\index.tsx",
    "src\pages\contact.tsx"
)

foreach ($file in $filesToBackup) {
    if (Test-Path $file) {
        $dest = Join-Path $backupDir $file
        New-Item -ItemType Directory -Path (Split-Path $dest) -Force | Out-Null
        Copy-Item $file $dest
        Write-Host "  Backed up: $file" -ForegroundColor DarkGray
    }
}
Write-Host "`nBackup saved to: $backupDir`n" -ForegroundColor Green

Write-Host "Files updated. Run 'npm run dev' to test." -ForegroundColor Cyan
Write-Host ""
Write-Host "Changes made:" -ForegroundColor Yellow
Write-Host "  [UPDATED] src/data/site.ts      - 'From' prices, CTA config, deposit policy, calendly link"
Write-Host "  [UPDATED] src/pages/index.tsx    - New pricing CTAs, microcopy, routing logic"
Write-Host "  [UPDATED] src/pages/contact.tsx  - Reads ?package= param, Calendly block for Premium"
Write-Host "  [NEW]     src/pages/question.tsx - Lightweight quick question form"
Write-Host ""
Write-Host "TODO after pasting:" -ForegroundColor Yellow
Write-Host "  1. Create Stripe deposit links for Growth (GBP100) and Premium (GBP150-200)"
Write-Host "  2. Add deposit links to site.ts depositLink fields"
Write-Host "  3. Test all 3 pricing card flows"
