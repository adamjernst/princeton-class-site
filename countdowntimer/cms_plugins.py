from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from models import CountdownTimerPlugin
from django.utils.translation import ugettext as _

class CMSCountdownTimerPlugin(CMSPluginBase):
    model = CountdownTimerPlugin
    name = _("Countdown Timer")
    render_template = "countdown.html"

    def render(self, context, instance, placeholder):
        context.update({'date': instance.date,
                        'object': instance,
                        'placeholder': placeholder})
        return context

plugin_pool.register_plugin(CMSCountdownTimerPlugin)
