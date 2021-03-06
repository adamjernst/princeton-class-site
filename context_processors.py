from paypal.standard.forms import PayPalPaymentsForm

def class_dues(request):
    paypal_dict = {
        "amount": "25.00",
        "item_name": "Princeton 2010 Class Dues",
        "notify_url": "http://www.princeton2010.org/ipn/",
        "return_url": "http://www.princeton2010.org/dues-paid/",
        "cancel_return": "http://www.princeton2010.org/dues-canceled/"
    }
    
    return {'duesform': PayPalPaymentsForm(initial=paypal_dict)}
