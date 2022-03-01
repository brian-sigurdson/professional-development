class MusicPlayer:
	firmware_version = 1

	def __init__(self):
		self.tracks = ["Moonage Daydream", "Starman", "Life on Mars?"]
		self.current_track = None

	def play(self):
		self.current_track = self.tracks[0]
		# for song in self.tracks:
		# 	print(song)

	def list_tracks(self):
		return self.tracks.copy()


	@classmethod
	def update_firmware_version(cls, new_version):
		if cls.firmware_version < new_version:
			cls.firmware_version = new_version

player = MusicPlayer()
print("Tracks currently on device: ", player.list_tracks())

MusicPlayer.update_firmware_version(2.0)
print("Updated player firmware version to", player.firmware_version)

player.play()
print(f"Currently playing '{player.current_track}'")
