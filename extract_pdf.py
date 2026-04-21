from pypdf import PdfReader
reader = PdfReader("The young changemaker workshop.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
with open("pdf_text.txt", "w") as f:
    f.write(text)
