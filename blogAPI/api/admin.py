from django.contrib import admin
from .models import Article

# Register your models here.

# admin.site.register(Article)


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'summary', 'created_at')
    list_display = ('title', 'summary', 'created_at')
