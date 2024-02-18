from django.urls import path, include
# ArticleDetails, ArticleList
from .views import ArticleViewSet, UserViewSet, UserBlogs, CheckAuth
# article_list, article_details

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)
router.register('myblogs', UserBlogs, basename='articles')
# router.register('checkauth', CheckAuth, basename='auth')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/checkauth/', CheckAuth.as_view()),
    # path('articles/<int:id>', ArticleDetails.as_view()),
    # path('articles/', article_list),
    # path('articles/<int:pk>', article_details)
]
