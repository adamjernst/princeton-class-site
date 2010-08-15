from django.utils.translation import ugettext as _
from django.db import models

from cms.models import CMSPlugin

class CountdownTimerPlugin(CMSPlugin):
    date = models.DateTimeField(_('date'))

    def __unicode__(self):
        return u'%s' % (self.date,)
