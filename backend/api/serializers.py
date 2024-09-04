from rest_framework import serializers
from .models import CustomerContactMethod, Customer,Inventory, OrderDetail, Order


###
###   Create serializers
###

class CustomerCREATESerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['entry_created_at','entry_modified_at','is_active','customer_type','first_name','last_name','address','address2','country']

class InventoryCREATESerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ['entry_created_at','entry_modified_at','description','cost','units_in_stock',]

class OrderDetailCREATESerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ['order_number','product_id','entry_created_at','entry_modified_at','qty_ordered']

class OrderCREATESerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['entry_created_at','entry_modified_at','order_type','is_cancelled','order_total','is_completed','customer_id',]



###
###   Read serializers
###

class CustomerREADSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class InventoryREADSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory 
        fields = '__all__'

class OrderDetailREADSerializer(serializers.ModelSerializer):
    product = InventoryREADSerializer(read_only=True)

    class Meta:
        model = OrderDetail
        fields = '__all__'

class OrderREADSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        


###   Customer Order Informaton
class CustomerOrderInfoSerializer(serializers.ModelSerializer):
    product_id = InventoryREADSerializer(read_only=True)
    #order = OrderREADSerializer(read_only=True)

    class Meta:
        model = OrderDetail
        fields = ['id', 'order_number','product_id','customer_id','entry_created_at','entry_modified_at','qty_ordered']


###   Order's Product Table Infomartion
class ProductListProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = [
            'product_id', 'description', 'units_in_stock', 
            #'notes', '', '', '', '', '', '', 
        ]

###   Order's detail product information
class ProductListOrderDetailSerializer(serializers.ModelSerializer):
    product = ProductListProductSerializer(source='product_id', read_only=True)

    class Meta:
        model = OrderDetail
        fields = [
            'order_number', 'product', 'qty_ordered', 
            #'qty_shipped', 'memo_description', 'discount', 'taxable', 'sales_price', 'units_measure', 'weight', 'volume', 'job_id', 'warehouse_id', '', 
        ]

###
###   Search Orders Serializer
###

class SearchOrdersCustomerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'customer_type', 
                  #'company_name', 
                  'last_name', 'address', 'address2', 
                  #'city', 'state', 'zip'
                  ]

class SearchOrdersSerializer(serializers.ModelSerializer):
    customer_id = SearchOrdersCustomerInfoSerializer(read_only=True)

    class Meta:
        model = Order
        fields = ['customer_id', 'entry_modified_at', 'id', 
                 # 'customer_po', 'ship_via', 'sales_person', 
                  'order_type', 'is_completed', 
                  #'message', 'notes'
                  ]
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['customer'] = representation.pop('customer_id')
        return representation
    
###
###   Customer Info Serializer
###
class ContactMethodREADSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerContactMethod
        fields = ['__all__']


class CustomerInfoSerializer(serializers.ModelSerializer):
    contacts = ContactMethodREADSerializer(read_only=True)
    class Meta:
        model = Customer
        fields = ['id', 'company_name', 'customer_type', 'salutation', 'attention', 
                  'first_name', 'last_name', 'other_names', 'address1', 'address2', 
                  'city', 'state', 'zip', 'county', 'country', 'contacts', 'notes', 
                  'directions', 'credit_limit', 'credit_hold', 'credit_card', 
                  'credit_card_exp', 'ship_via', 'terms', 'sales_person', 'pricing', 
                  'pricing_level', 'entry_created_at', 'entry_modified_at']