pwc_offer = 102000
deloitte_offer = 100000

if (pwc_offer > deloitte_offer):
    print('Accept PwC offer')
else:
    if (deloitte_offer - pwc_offer >= 5000):
        print('Accept Deloitte offer')
    else:
        print('Accept PwC offer')