from diary import Diary # diary
import datetime


class CustomDiary(Diary):
    def __init__(self, birthday, christmas, date_format):
        self.date_format = date_format
        super().__init__(birthday, christmas)

    def format_date(self, date):
        return date.strftime(self.date_format)




diary1 = CustomDiary(datetime.date(2022, 5, 14), datetime.date(2022, 12, 25), '%d-%b-%Y')
diary2 = CustomDiary(datetime.date(2022, 5, 14), datetime.date(2022, 12, 25), '%d/%b/%Y')

print(diary1.show_birthday())
print(diary2.show_birthday())