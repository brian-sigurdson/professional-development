import datetime

class Diary():

    @staticmethod
    def format_date(date):
        return date.strftime('%y-%b-%d')


    def __init__(self, birthday, christmas):
        self.birthday = birthday
        self.christmas = christmas

    def show_birthday(self):
        return self.format_date(self.birthday)
    
    def show_christmas(self):
        return self.format_date(self.christmas)

diary = Diary(datetime.date(2022, 5, 14), datetime.date(2022, 12, 25))

print(diary.show_birthday())