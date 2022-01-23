class WebBrowser:
	connected = True

	def __init__(self, page):
		self.history = [page]
		self.current_page = page
		self.is_incognito = False


firefox = WebBrowser("google.com")
chrome = WebBrowser("facebook.com")

print(firefox.connected)
print(chrome.connected)
print(WebBrowser.connected)

print(firefox.__dict__)
# print(WebBrowser.__dict__)

firefox.connected = False
print(firefox.__dict__)
print(WebBrowser.connected)