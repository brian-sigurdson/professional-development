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


vivaldi = WebBrowser("gocampaing.org")
print(vivaldi.current_page)
vivaldi.navigate("reddit.com")
print(vivaldi.current_page)
vivaldi.navigate("abc.org")
print(vivaldi.current_page)
print(vivaldi.history)
vivaldi.clear_history()
print(vivaldi.history)
