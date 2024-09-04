from rest_framework import generics
from rest_framework import serializers
from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Customer, Inventory, OrderDetail, Order

from .serializers import CustomerREADSerializer, InventoryREADSerializer, OrderDetailREADSerializer, OrderREADSerializer
from .serializers import CustomerCREATESerializer, InventoryCREATESerializer, OrderDetailCREATESerializer, OrderCREATESerializer 

from .serializers import CustomerOrderInfoSerializer

from .serializers import ProductListOrderDetailSerializer

from .serializers import SearchOrdersSerializer


from django.db.models import Q

from datetime import datetime, timedelta

###
###   CRUD API Viewsets
###

class CustomersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows customers to be viewed or edited.
    """
    queryset = Customer.objects.all()
    
    def get_serializer_class(self):
        """
        Custom get serializer method to handle the viewing or creating/editing of a customer.
        """
        if self.action in ['create', 'update']:
            return CustomerCREATESerializer
        return CustomerREADSerializer
    
    def create(self, request, *args, **kwargs):
        """
        Custom create method to handle the creation of a customer.
        """
        # print(f"\n\n\n{request.data}\n\n\n") display request data for debugging purposes
        serializer = self.get_serializer(data=request.data) # Create a serializer instance with the incoming request data
        try:
            # Check if the serializer is valid 
            serializer.is_valid(raise_exception=True)
        except serializers.ValidationError as e:
            # If the validation fails, catch the error
            print(f"Validation error: {e.detail}")
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)
        # If the validation succeeds, save the data and return a response
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data) # Get the headers for the response
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class InventoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Inventory to be viewed or edited.
    """
    queryset = Inventory.objects.all()
    
    def get_serializer_class(self):
        """
        Custom get serializer method to handle the viewing or creating/editing of an inventory product.
        """
        if self.action in ['create', 'update']:
            return InventoryCREATESerializer
        return InventoryREADSerializer
    
    def create(self, request, *args, **kwargs):
        """
        Custom create method to handle the creation of an inventory product.
        """
        # print(f"\n\n\n{request.data}\n\n\n") display request data for debugging purposes
        serializer = self.get_serializer(data=request.data) # Create a serializer instance with the incoming request data
        try:
            # Check if the serializer is valid 
            serializer.is_valid(raise_exception=True)
        except serializers.ValidationError as e:
            # If the validation fails, catch the error
            print(f"Validation error: {e.detail}")
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)
        # If the validation succeeds, save the data and return a response
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data) # Get the headers for the response
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class OrderDetailsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows OrderDetails to be viewed or edited.
    """
    queryset = OrderDetail.objects.all()
    
    def get_serializer_class(self):
        """
        Custom get serializer method to handle the viewing or creating/editing of an order detail.
        """
        if self.action in ['create', 'update']:
            return OrderDetailCREATESerializer
        return OrderDetailREADSerializer
    
    def create(self, request, *args, **kwargs):
        """
        Custom create method to handle the creation of an order detail.
        """
        # print(f"\n\n\n{request.data}\n\n\n") display request data for debugging purposes
        serializer = self.get_serializer(data=request.data) # Create a serializer instance with the incoming request data
        try:
            # Check if the serializer is valid 
            serializer.is_valid(raise_exception=True)
        except serializers.ValidationError as e:
            # If the validation fails, catch the error
            print(f"Validation error: {e.detail}")
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)
        # If the validation succeeds, save the data and return a response
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data) # Get the headers for the response
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
class OrdersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Orders to be viewed or edited.
    """
    queryset = Order.objects.all()

    def get_serializer_class(self):
        """
        Custom get serializer method to handle the viewing or creating/editing of an order.
        """
        if self.action in ['create', 'update']:
            return OrderCREATESerializer
        return OrderREADSerializer
    
    def create(self, request, *args, **kwargs):
        """
        Custom create method to handle the creation of an order.
        """
        # print(f"\n\n\n{request.data}\n\n\n") display request data for debugging purposes
        serializer = self.get_serializer(data=request.data) # Create a serializer instance with the incoming request data
        try:
            # Check if the serializer is valid 
            serializer.is_valid(raise_exception=True)
        except serializers.ValidationError as e:
            # If the validation fails, catch the error
            print(f"Validation error: {e.detail}")
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)
        # If the validation succeeds, save the data and return a response
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data) # Get the headers for the response
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    

###
###   Specific Tasks
###

# Retrieves and lists all the order details for a specific customer based on their customer ID
class CustomerOrdersView(generics.ListAPIView):
    serializer_class = OrderDetailREADSerializer

    def get_queryset(self):
        customer_id = self.kwargs['customer_id']
        # filter for the orders made by the customer with the given id
        customer_orderDetails = OrderDetail.objects.filter(customer_id=customer_id)
        
        od = OrderDetailREADSerializer(customer_orderDetails, many=True).data

        #debugging
        for orderDetail in od:
            print(f"\n\n::::::::: {orderDetail}\n\n")

        return customer_orderDetails
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        order_details = OrderDetailREADSerializer(queryset, many=True).data

        #debugging
        # for orderDetail in order_details:
        #     print(f"\n\n   {orderDetail}\n\n")

        return Response(order_details)

# Retrives the information on a single customer
class CustomerDetailView(generics.RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerREADSerializer
    lookup_field = 'id'

# Retrieves the orders made by a customer
class CustomerOrdersAndProductsView(generics.ListAPIView):
    """
    API view to list all orders and associated products for a specific customer.

    This view retrieves all orders made by a customer, along with the associated product details,
    using the customer's ID provided in the URL.
    """
    serializer_class = OrderDetailREADSerializer

    def get_queryset(self):
        """
        Retrieve the queryset of order details for the specific customer.

        This method filters the OrderDetail objects to get only those associated with the given
        customer_id and selects related product details.

        Returns:
            QuerySet: A QuerySet of OrderDetail objects for the specified customer.
        """
        customer_id = self.kwargs['customer_id']
        customer_orders = OrderDetail.objects.filter(customer_id=customer_id).select_related('product_id')

        #debugging
        # for orderDetail in customer_orders:
        #     print(f"\n\n{orderDetail}\n\n")

        return customer_orders
    
    def list(self, request, *args, **kwargs):
        """
        Override the list method to provide a custom response with the order details.

        This method uses the CustomerOrderInfoSerializer to serialize the queryset obtained from
        get_queryset and returns it in the response.

        Args:
            request (Request): The HTTP request object.
            *args: Variable length argument list.
            **kwargs: Arbitrary keyword arguments.

        Returns:
            Response: A Response object containing serialized order details.
        """
        queryset = self.get_queryset()
        order_details = CustomerOrderInfoSerializer(queryset, many=True).data

        #debugging
        # for orderDetail in order_details:
        #     print(f"\n\n2222222   {orderDetail}\n\n")

        return Response(order_details)

###
###   Status Order Lists
###

class ActiveOrdersView(generics.ListAPIView):
    """
    API view to list all active orders.
    """
    serializer_class = OrderREADSerializer

    def get_queryset(self):
        """
        This method filters the Order objects to get only those with false is_cancelled 
        attribute.
        
        Returns:
            QuerySet: A QuerySet of Order objects that are active.
        """
        active_orders = Order.objects.filter(is_cancelled=False)

        #debugging
        # for order in active_orders:
        #     print(f"\n\n{order}")
        #     print(f"Is Active:{True if not (order.is_cancelled or order.is_completed) else False}\n\n")

        return active_orders
    
    def list(self, request, *args, **kwargs):
        """
        This method uses the OrderREADSerializer to serialize the queryset obtained from
        get_queryset and returns it in the response.

        Returns:
            Response: A Response object containing serialized active orders.
        """
        queryset = self.get_queryset()
        order_details = OrderREADSerializer(queryset, many=True).data

        #debugging
        # for orderDetail in order_details:
        #     print(f"\n\n{orderDetail}\n\n")

        return Response(order_details)
    
class CancelledOrdersView(generics.ListAPIView):
    """
    API view to list all cancelled orders.
    """
    serializer_class = OrderREADSerializer

    def get_queryset(self):
        """
        This method filters the Order objects to get only those with a true cancelled attribute.
        
        Returns:
            QuerySet: A QuerySet of Order objects that are cancelled.
        """
        cancelled_orders = Order.objects.filter(is_cancelled=True)

        #debugging
        # for order in cancelled_orders:
        #     print(f"\n\n{order}")
        #     print(f"Is Cancelled:{order.is_cancelled}\n\n")

        return cancelled_orders
    
    def list(self, request, *args, **kwargs):
        """
        This method uses the OrderREADSerializer to serialize the queryset obtained from
        get_queryset and returns it in the response.

        Returns:
            Response: A Response object containing serialized cancelled orders.
        """
        queryset = self.get_queryset()
        order_details = OrderREADSerializer(queryset, many=True).data

        #debugging
        # for orderDetail in order_details:
        #     print(f"\n\n{orderDetail}\n\n")

        return Response(order_details)
    
class CompletedOrdersView(generics.ListAPIView):
    """
    API view to list all completed orders.
    """
    serializer_class = OrderREADSerializer

    def get_queryset(self):
        """
        This method filters the Order objects to get only those with a true is_completed attribute.
        
        Returns:
            QuerySet: A QuerySet of Order objects that are completed.
        """
        active_orders = Order.objects.filter(is_completed=True)

        #debugging
        # for order in active_orders:
        #     print(f"\n\n{order}")
        #     print(f"Is Active:{True if not (order.is_cancelled or order.is_completed) else False}\n\n")

        return active_orders
    
    def list(self, request, *args, **kwargs):
        """
        This method uses the OrderREADSerializer to serialize the queryset obtained from
        get_queryset and returns it in the response.

        Returns:
            Response: A Response object containing serialized completed orders.
        """
        queryset = self.get_queryset()
        order_details = OrderREADSerializer(queryset, many=True).data

        #debugging
        # for orderDetail in order_details:
        #     print(f"\n\n{orderDetail}\n\n")

        return Response(order_details)

class NonActiveOrdersView(generics.ListAPIView):
    """
    API view to list all non active orders.
    """
    serializer_class = OrderREADSerializer

    def get_queryset(self):
        """
        This method filters the Order objects to get only those which are neither completed or cancelled.
        
        Returns:
            QuerySet: A QuerySet of Order objects that are non active.
        """
        query = Q(is_cancelled=True) | Q(is_completed=True)
        non_active_orders = Order.objects.complex_filter(query)

        #debugging
        # for order in non_active_orders:
        #     print(f"\n\n{order}")
        #     print(f"Is Active:{True if not (order.is_cancelled or order.is_completed) else False}\n\n")

        return non_active_orders
    
    def list(self, request, *args, **kwargs):
        """
        This method uses the OrderREADSerializer to serialize the queryset obtained from
        get_queryset and returns it in the response.

        Returns:
            Response: A Response object containing serialized non active orders.
        """
        queryset = self.get_queryset()
        order_details = OrderREADSerializer(queryset, many=True).data

        #debugging
        # for orderDetail in order_details:
        #     print(f"\n\n{orderDetail}\n\n")

        return Response(order_details)
    
###
###   Order Views
### 

class OrderProductListView(generics.ListAPIView):
    serializer_class = ProductListOrderDetailSerializer

    def get_queryset(self):
        order_number = self.kwargs['order_number']
        return OrderDetail.objects.filter(order_number=order_number).select_related('product_id')


class OrderSearchView(APIView):
    def get(self, request):
        
        queryset = Order.objects.all().select_related('customer_id')

        # Debugging
        print(queryset)

        #
        # Fetch user inputs
        # 

        customer_id = request.GET.get('customer_id')
        from_date = request.GET.get('from_date')
        to_date = request.GET.get('to_date')
        order_number = request.GET.get('order_number')
        
        customer_po = request.GET.get('customer_po')

        customer_type = request.GET.get('customer_type')

        ship_via = request.GET.get('ship_via')
        sales_person = request.GET.get('sales_person')
        order_type = request.GET.get('order_type')
        company_name = request.GET.get('company_name')
        last_name = request.GET.get('last_name')
        address = request.GET.get('address')
        address2 = request.GET.get('address2')
        city = request.GET.get('city')
        state = request.GET.get('state')
        zip_code = request.GET.get('zip_code')

        is_complete = request.GET.get('is_complete')
        message = request.GET.get('message')
        notes = request.GET.get('notes')

        #
        # Filter via inputs
        #

        if customer_id:
            queryset = queryset.filter(customer_id=customer_id)
        #TODO if from_date and to_date:
            # check from_date < to_date
        if from_date:
            queryset = queryset.filter(entry_modified_at__gte=from_date)
        if to_date:
            queryset = queryset.filter(entry_modified_at__lte=to_date)
        if order_number:
            queryset = queryset.filter(id=order_number)
        

        if customer_po:
            queryset = queryset.filter(order__customer_po=customer_po)


        if customer_type:
            queryset = queryset.filter(customer_id__customer_type=customer_type)


        if ship_via:
            queryset = queryset.filter(order__ship_via=ship_via)
        if sales_person:
            queryset = queryset.filter(order__sales_person=sales_person)
        if order_type:
            queryset = queryset.filter(order__order_type=order_type)
        if company_name:
            queryset = queryset.filter(order__company_name=company_name)
        if last_name:
            queryset = queryset.filter(order__last_name=last_name)
        if address:
            queryset = queryset.filter(order__address=address)
        if address2:
            queryset = queryset.filter(order__address2=address2)
        if state:
            queryset = queryset.filter(customer__state__icontains=state)
        if city:
            queryset = queryset.filter(customer_id__city__icontains=city)
        if zip_code:
            queryset = queryset.filter(customer_id__zip_code=zip_code)
        if is_complete:
            queryset = queryset.filter(order__is_complete=is_complete)
        if message:
            queryset = queryset.filter(order__message=message)
        if notes:
            queryset = queryset.filter(order__notes=notes)
        
        serializer = SearchOrdersSerializer(queryset, many=True)

        # Debugging
        # print(f"\n\n{serializer.data}\n\n")

        return Response(serializer.data)

