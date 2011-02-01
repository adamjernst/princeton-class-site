from django.db import models

class ReunionSignup(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    
    def __unicode__(self):
        return "{0} ({1})".format(self.name, self.email)

class ReunionGuest(models.Model):
    signup = models.ForeignKey(ReunionSignup)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    
    def __unicode__(self):
        return "{0} ({1}): Guest of {2}".format(self.name, self.email, self.signup)
