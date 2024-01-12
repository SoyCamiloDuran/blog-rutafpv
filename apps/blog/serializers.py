from unicodedata import category
from rest_framework import serializers
from .models import Post
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    category=CategorySerializer()
    class Meta:
        model=Post
        fields=[
            'blog_uuid',
            'title',
            'slug',
            'thumbnail',
            'description',
            'excerpt',
            'category',
            'published',
            'status',
        ]