def convert_usd_to_aud(amount, rate=.75):
    return amount / rate


if __name__ == '__main__':
    print(convert_usd_to_aud(100))
    print(convert_usd_to_aud(100, rate=.8))
    print(convert_usd_to_aud(100, rate=.5))

