class WebBrowser:
	def __init__(self, page):
		self.history = [page]
		self.current_page = page
		self.is_incognito = False

	def navigate(self, new_page):
		self.current_page = new_page
		if not self.is_incognito:
			self.history.append(new_page)

	def clear_history(self):
		self.history[:-1] = []

	@classmethod
	def with_incognito(cls, page):
		instance = cls(page)
		instance.is_incognito = True
		instance.history = []
		return instance


print(WebBrowser.with_incognito)

chrome = WebBrowser.with_incognito("abc.org")
print(chrome.is_incognito)
print(chrome.current_page)
print(chrome.history)

