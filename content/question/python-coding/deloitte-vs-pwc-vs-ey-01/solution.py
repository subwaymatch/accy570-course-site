pwc_offer = 87000
deloitte_offer = 84000
ey_offer = 85000

if (pwc_offer > deloitte_offer) and (pwc_offer > ey_offer):
    print('Accept PwC offer')
elif (ey_offer > deloitte_offer) and (ey_offer > pwc_offer):
    print('Accept EY offer')
else:
    print('Accept Deloitte offer')