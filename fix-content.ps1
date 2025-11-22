$content = Get-Content "index.html" -Raw -Encoding UTF8

# Fix section 5
$content = $content -replace 'Nhấn vào những biểu tượng để xem điều[\s\S]*?anh muốn nói', 'Những lời chúc anh muốn gửi đến em'

# Fix section 6
$content = $content -replace 'Lời chúc cuối cùng\.\.\.', 'Lời chào tạm biệt...'
$content = $content -replace 'Mong em luôn cười thật vui, thật hạnh phúc, thật rạng rỡ — như cách anh từng mong em sẽ được như vậy trong cuộc đời mình\.', 'Anh đã trưởng thành hơn, đã học cách buông bỏ và chấp nhận.<br>                    Giờ đây, anh thật lòng chúc em tìm được hạnh phúc của riêng mình.<br>                    Một hạnh phúc mà em xứng đáng được có, không áp lực, không gánh nặng.'

# Fix thank you message in JavaScript
$content = $content -replace "Cảm ơn em đã đọc hết\. Anh chúc em luôn hạnh phúc\.", "Cảm ơn em đã dành thời gian đọc. Anh chúc em luôn bình yên và hạnh phúc."

# Save with UTF8
[System.IO.File]::WriteAllText("index.html", $content, [System.Text.UTF8Encoding]::new($false))

Write-Host "Fixed content successfully!" -ForegroundColor Green
