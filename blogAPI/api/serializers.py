from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Article
from rest_framework.authtoken.views import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'title', 'author_name', 'summary',
                  'content', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at', 'author']
