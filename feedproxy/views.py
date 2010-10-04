# Create your views here.
import urllib2

from django.http import HttpResponse

def index(request):
    r = urllib2.urlopen("http://pipes.yahoo.com/pipes/pipe.run?_id=706af73f4f8980428af87ba0b7291fa7&_render=rss")
    return HttpResponse(r.read(), mimetype=r.info()["Content-Type"])
