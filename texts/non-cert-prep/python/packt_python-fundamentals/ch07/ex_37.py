class WebBrowser:
	def __init__(self, page):
		self.history = [page]
		self.current_page = page
		self.is_incognito = False


firefox = WebBrowser("google.com")
chrome = WebBrowser("facebook.com")

print(firefox.current_page)
print(chrome.current_page)
