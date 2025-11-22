# Fix emoji encoding issues
$file = "index.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Replace broken emojis
$content = $content -replace '(?<=opacity-40 animate-pulse">).(?=</div>)', '💎'
$content = $content -replace '(?<=animation-delay: 1s;">).(?=</div>)', '🌊'
$content = $content -replace '(?<=animation-delay: 2s;">).(?=</div>)', '💙'
$content = $content -replace '(?<=animate-bounce intro-heart">).(?=</div>)', '💙'
$content = $content -replace '(?<=animation-delay: 0\.5s;">).(?=</div>)', '💎'
$content = $content -replace 'Bắt đầu nhé .', 'Bắt đầu nhé 💙'
$content = $content -replace '. Em kéo xuống nhé !! .', '💙 Em kéo xuống nhé !! 💙'
$content = $content -replace '(?<=animation-duration: 10s;">).(?=</div>)', '🌊'
$content = $content -replace 'data-message="Anh không bao giờ quên em">.(?=</div>)', 'data-message="Anh không bao giờ quên em">🌊</div>'
$content = $content -replace '. Nhấn vào trái tim nhé .', '💙 Nhấn vào trái tim nhé 💙'
$content = $content -replace 'Cảm ơn anh .', 'Cảm ơn anh 💙'

# Save with UTF-8 BOM
$Utf8BomEncoding = New-Object System.Text.UTF8Encoding $true
[System.IO.File]::WriteAllText($file, $content, $Utf8BomEncoding)

Write-Host "Fixed emoji encoding issues!" -ForegroundColor Green
