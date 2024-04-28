from ex47 import convert_usd_to_aud

def convert_and_sum_list(usd_list, rate=.75):
    total = 0
    for amount in usd_list:
        total += convert_usd_to_aud(amount, rate)

    return total 

print(convert_and_sum_list([1,3]))

def convert_and_sum_list2(usd_list, **kwargs):
    total = 0
    for amount in usd_list:
        total += convert_usd_to_aud(amount, **kwargs)

    return total 

print(convert_and_sum_list([1,3], rate=.8))