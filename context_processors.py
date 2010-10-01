from paypal.standard.forms import PayPalPaymentsForm

def class_dues(request):
    paypal_dict = {
        "amount": "20.00",
        "item_name": "Princeton 2010 Class Dues",
        "invoice": "princeton-2010-dues",
        "notify_url": "http://www.princeton2010.org/your-ipn-location/",
        "return_url": "http://www.princeton2010.org/dues-paid/",
        "cancel_return": "http://www.princeton2010.org/dues-canceled/"
    }
    
    return {'duesform': PayPalPaymentsForm(initial=paypal_dict)}
