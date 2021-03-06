from django.contrib.auth.models import AbstractUser
from django.db import models

from django_mysql.models import ListCharField
import datetime


# TODO email isn't unique
class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)

# Create your models here.



class Section(models.Model):
    Section = models.CharField(max_length=500,unique=True)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Section

class Skill(models.Model):
    Skill = models.CharField(max_length=500,unique=True)
    section = models.ForeignKey(Section, on_delete=models.CASCADE,default="",blank=True,null=True)
    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Skill

class Sectionv2(models.Model):
    Section = models.CharField(max_length=500,unique=True)
    skilll = models.ManyToManyField(Skill,null=True,blank=True)
    # tasks = models.ManyToManyField(Task)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.Section



class Answers(models.Model):
    wronganswers =ListCharField(
        base_field=models.CharField(max_length=200),
        size=6,
        max_length=(120 * 11),
        default = None # 6 * 10 character nominals, plus commas
    )
    correctans =ListCharField(
        base_field=models.CharField(max_length=200),
        size=6,
        max_length=(120 * 11),
        default = None # 6 * 10 character nominals, plus commas
    )

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return (str(self.wronganswers+self.correctans))

class Image(models.Model):
    name = models.CharField(max_length=500)
    image = models.ImageField(blank=True, null=True)
    user_id = models.IntegerField()


class Task(models.Model):
    RODZAJE = {
        (0, 'Nieznany'),
        (1, 'Otwarte'),
        (2, 'Zamknięte'),
        (3, 'Krótka odpowiedź'),
    }
    RODZAJE2 = {
        (0, 'Nieznany'),
        (1, 'Podstawowy'),
        (2, 'Rozszerzony'),
    }
    text = models.CharField(max_length=600,unique=True)
    wronganswers =ListCharField(
        base_field=models.CharField(max_length=200),
        size=6,
        max_length=(120 * 11),
        default = None,
        blank = True# 6 * 10 character nominals, plus commas
    )
    correctans =ListCharField(
        base_field=models.CharField(max_length=200),
        size=6,
        max_length=(120 * 11),
        default = None,
        blank = True# 6 * 10 character nominals, plus commas
    )
    type = models.IntegerField(choices=RODZAJE)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE,default="",blank=True,null=True)
    level = models.IntegerField(choices=RODZAJE2)
    private = models.BooleanField(default=False)
    points = models.IntegerField(default=0)
    skill = models.ManyToManyField(Skill)
    image = models.ManyToManyField(Image, blank=True)
    timetosolve = models.IntegerField(blank=True,null=True)
    spacetosolve = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.text


class TestJSON(models.Model):
    name = models.TextField(null=True)
    tasks = models.TextField(null=True)
    created = models.DateTimeField(auto_now=True)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE,default="",blank=True,null=True)

    def __str__(self):
        return self.nasza_nazwa()

    def nasza_nazwa(self):
        return self.name

class PasswordSendReset(models.Model):
    email = models.EmailField(blank=True, max_length=254, verbose_name='email address')

class UserResetToken(models.Model):
    email = models.EmailField(blank=True, max_length=254, verbose_name='email address')
    expire = models.DateTimeField()
    created_on = models.DateTimeField()
    used = models.BooleanField()

class UserActivationToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    expire = models.DateTimeField()
    created_on = models.DateTimeField()
    used = models.BooleanField()

class ImageDB(models.Model):
    image = models.BinaryField(blank=True)

class SecAndSkillhelp(models.Model):
    text = models.CharField(max_length=60000,unique=True)
