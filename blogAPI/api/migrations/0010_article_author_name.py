# Generated by Django 5.0.1 on 2024-02-18 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_article_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='author_name',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
