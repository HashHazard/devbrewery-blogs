from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    # author = models.CharField(max_length=50)
    author = models.ForeignKey(
        User, auto_created=True, on_delete=models.CASCADE)

    author_name = models.CharField(max_length=100, blank=True)
    summary = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True, auto_now=False,  verbose_name="Publish date")
    updated_at = models.DateTimeField(
        auto_now_add=False, auto_now=True,  verbose_name="Last update")

    def __str__(self):
        return self.title
