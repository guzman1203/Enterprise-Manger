from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'customer-table', views.CustomersViewSet)
router.register(r'inventory-table', views.InventoryViewSet)
router.register(r'order_detail-table', views.OrderDetailsViewSet)
router.register(r'order-table', views.OrdersViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('customer-table/<int:id>/', views.CustomerDetailView.as_view() , name='customer-details'),
    path('customer-table/<int:customer_id>/orders/', views.CustomerOrdersAndProductsView.as_view(), name='customer-orders'),
    
    path('order-table/active', views.ActiveOrdersView.as_view() , name='active-orders'),
    path('order-table/cancelled', views.CancelledOrdersView.as_view() , name='cancelled-orders'),
    path('order-table/completed', views.CompletedOrdersView.as_view() , name='completed-orders'),
    path('order-table/non-active', views.NonActiveOrdersView.as_view() , name='non-active-orders'),
    path('order-table/<int:order_number>/details-products/', views.OrderProductListView.as_view() , name='orders-product-list'),

    path('search-orders/', views.OrderSearchView.as_view(), name='search-orders'),

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]