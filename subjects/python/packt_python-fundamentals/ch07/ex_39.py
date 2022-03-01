class WebBrowser:
	number_of_web_browsers = 0
	connected = True

	def __init__(self, page):
		self.history = [page]
		self.current_page = page
		self.is_incognito = False
		WebBrowser.number_of_web_browsers += 1


print(WebBrowser.number_of_web_browsers)
firefox = WebBrowser("google.com")
chrome = WebBrowser("facebook.com")
print(WebBrowser.number_of_web_browsers)

