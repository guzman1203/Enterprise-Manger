from django.db import models

    
###################################################
######     Bottom Tier Standalone Models     ######
###################################################

#!

# class Accounting(models.Model):
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name
    

# class SalesTaxCode1(models.Model):
#     code = models.CharField(max_length=10)
#     description = models.TextField()

#     def __str__(self):
#         return self.code


# class SalesTaxCode2(models.Model):
#     code = models.CharField(max_length=10)
#     description = models.TextField()

#     def __str__(self):
#         return self.code

# class Terms(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True)

#     def __str__(self):
#         return self.name

# class Warehouse(models.Model):
#     name = models.CharField(max_length=100)
#     location = models.CharField(max_length=255)
#     description = models.TextField(blank=True, default='')

#     def __str__(self):
#         return self.name

####################################################
######     Middle Tier Placeholder Models     ######
####################################################




class Customer(models.Model):

    # foreign keys
    # sales_tax_code1 = models.ForeignKey(SalesTaxCode1, on_delete=models.SET_NULL, null=True, blank=True) #!
    # sales_tax_code2 = models.ForeignKey(SalesTaxCode2, on_delete=models.SET_NULL, null=True, blank=True) #!

    # set of customer types
    CUSTOMER_TYPE_CHOICES = [('individual', 'Individual'), ('company', 'Company'),] #!
    CUSTOMER_COUNTRY_CHOICES = [('United States', 'united states'), ('Canada', 'canada'), ('Spain', 'spain')] #!
    
    # attributes
    entry_created_at = models.DateTimeField(auto_now_add=True)
    entry_modified_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    # company_name = models.CharField(max_length=100, null=True, blank=True, default=None)
    customer_type = models.CharField(max_length=20, choices=CUSTOMER_TYPE_CHOICES)
    # salutation = 
    first_name = models.CharField(max_length=100, blank=False, null=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    # other_names = models.CharField(max_length=100, blank=True, default='')
    address = models.CharField(max_length=255, blank=False, null=False)
    address2 = models.CharField(max_length=255, blank=True, null=True)
    # city = models.CharField(max_length=100)
    # county = models.CharField(max_length=100)
    # state = models.CharField(max_length=100)
    # zip = models.CharField(max_length=100)
    country = models.CharField(choices=CUSTOMER_COUNTRY_CHOICES, max_length=30, blank=False, null=False)
    # credit_card = models.CharField(max_length=16, null=True, blank=True, default=None)
    # credit_card_exp = models.DateField(null=True, blank=True, default=None)
    # credit_limit = models.DecimalField(_(""))
    # credit_hold = models.BooleanField(_(""))
    # pricing = models.CharField(_(""), max_length=50)
    # pricing_level = models.CharField(_(""), max_length=50)
    # pricing_percent = models.DecimalField(_(""))
    # tax_exempt = models.BooleanField(_(""))
    # ship_via = models.CharField(_(""), max_length=50)
    # terms = models.CharField(_(""), max_length=50)
    # sales_person = models.CharField(_(""), max_length=50)
    # notes = models.CharField(_(""), max_length=50)
    # directions = models.CharField(_(""), max_length=50)
    # tax_number = models.CharField(_(""), max_length=50)
    # attention = models.CharField(_(""), max_length=50)
    # soundex = models.CharField(_(""), max_length=50)
    # ship_to = models.IntegerField(_(""))

    def __str__(self):
        customer = "\nCustomer - "
        if self.first_name:
            customer += "{"+self.first_name+" "+self.last_name+"}"
        # else:
        #     customer += "{"+self.company_name+"}"
        customer += f"\n   Customer Id: {self.id}"
        customer += f"\n   Created({self.entry_created_at.date()})    Modified({self.entry_modified_at.date()})"
        customer += f"\n   Active Status: {"Active" if self.is_active else "Inactive"}"
        customer += f"\n   Type: {self.customer_type}"
        customer += f"\n   Address 1: {self.address}    Address 2: {self.address2}"
        customer += f"\n   Country: {self.country}"
        # customer += f"\n   State: {self.state}"
        # customer += f"\n   City: {self.city}"
        # customer += f"\n   Zipcode: {self.zip}"

        return customer + "\n"


class Inventory(models.Model):
    # primary key
    product_id = models.AutoField(primary_key=True, db_column='product_id')

    # attributes
    entry_created_at = models.DateTimeField(auto_now_add=True)
    entry_modified_at = models.DateTimeField(auto_now=True)
    # vendor_number = models.CharField(max_length=50)
    # manufacture_number = models.CharField(max_length=50)
    description = models.TextField(max_length=100, blank=False, null=True)
    # additional_info = models.TextField()
    # vender_id = models.TextField()
    # manufacture = models.TextField(_(""))
    # item_class = models.CharField(max_length=50)
    cost = models.DecimalField(default=0.0, decimal_places=2, max_digits=10, blank=False, null=False)
    # current_cost = models.DecimalField(max_digits=10, decimal_places=2)
    # sales_price = models.DecimalField(max_digits=10, decimal_places=2)
    # pricing = models.CharField(_(""), max_length=50)
    # pricing_percent = models.DecimalField(_(""))
    # unit_measure = models.TextField(_(""))
    units_in_stock = models.IntegerField(default=0, blank=False, null=False)
    # units_on_back_order = models.IntegerField(default=0)
    # units_on_order = models.IntegerField(default=0)
    # reorder_point = models.IntegerField(_(""))
    # man_hours_req = models.IntegerField(_(""))
    # model_number = models.CharField(_(""), max_length=50)
    # upc_code = models.CharField(_(""), max_length=50)
    # leadtime = models.CharField(_(""), max_length=50)
    # category = models.CharField(_(""), max_length=50)
    # sales_account_id = models.CharField(_(""), max_length=50)
    # inventory_account_id = models.CharField(_(""), max_length=50)
    # cogs_account_id = models.CharField(_(""), max_length=50)
    # cost_method = models.CharField(_(""), max_length=50)
    # notes = models.CharField(_(""), max_length=50)
    # location = models.CharField(_(""), max_length=50)
    # latest_quote = models.DateField(_(""), auto_now=False, auto_now_add=False)
    # last_order_date = models.DateField(_(""), auto_now=False, auto_now_add=False)
    # expected_delivery_date = models.DateField(_(""), auto_now=False, auto_now_add=False)
    # serial_no_qty = models.IntegerField(_(""))
    # stock_detail_qty = models.IntegerField(_(""))
    # pricing_level_qty = models.DecimalField(_(""))
    # posted_date = models.DateField(_(""), auto_now=False, auto_now_add=False)
    # is_posted = models.BooleanField(_(""))

    def __str__(self):
        product = f"\nProduct - {self.product_id}"
        product += f"\n   Created({self.entry_created_at.date()})    Modified({self.entry_modified_at.date()})"
        product += f"\n   Description: {self.description}"
        product += f"\n   Cost: {self.cost}"
        product += f"\n   Units in Stock: {self.units_in_stock}"
        
        return product + "\n"

class Order(models.Model):
    # foreign keys
    customer_id = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    # accounting_id = models.ForeignKey(Accounting, on_delete=models.DO_NOTHING)
    # sales_tax_code1 = models.ForeignKey(SalesTaxCode1, on_delete=models.DO_NOTHING)
    # sales_tax_code2 = models.ForeignKey(SalesTaxCode2, on_delete=models.DO_NOTHING)
    # terms = models.ForeignKey(Terms, on_delete=models.DO_NOTHING)
    
    # set of order types 
    TYPE_CHOICES = [('standard', 'Standard'), ('express', 'Express'), ('custom', 'Custom'),]

    # attributes
    entry_created_at = models.DateTimeField(auto_now_add=True)
    entry_modified_at = models.DateTimeField(auto_now=True)
    # order_date = models.DateField(_(""), auto_now=False, auto_now_add=False)
    order_type = models.CharField(choices=TYPE_CHOICES, max_length=20, null=False)
    # customer_po = models.CharField(_(""), max_length=50)
    # ship_id = models.CharField(max_length=50, null=True, blank=True, default=None)
    # ship_to_attention = models.CharField(_(""), max_length=50)
    # ship_to_first_name = models.CharField(_(""), max_length=50)
    # ship_to_last_name = models.CharField(_(""), max_length=50)
    # ship_to_company = models.CharField(_(""), max_length=50)
    # ship_to_address = 
    # ship_to_address2 = 
    # ship_to_county = 
    # ship_to_city = 
    # ship_to_state
    # ship_to_zipcode
    # ship_to_country
    # ship_to_phone_number = 
    # date_shipped = models.DateField(null=True, blank=True, default=None)
    # ship_via = models.CharField(_(""), max_length=50)
    # terms = models.CharField(_(""), max_length=50)
    # sales_person = models.CharField(_(""), max_length=50)
    # job_type = models.CharField(_(""), max_length=50)
    # hourly_rate = models.DecimalField(_(""))
    is_cancelled = models.BooleanField(default=False)
    # date_cancelled = models.DateField(null=True, blank=True, default=None)
    # notes = models.CharField(_(""), max_length=50)
    # freight = models.IntegerField(_(""))
    # other = models.IntegerField(_(""))
    # sales_tax = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    # sales_tax2 = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    # shipped = models.BooleanField(_(""))
    # paid = models.BooleanField(_(""))
    # payment_info = models.TextField() 
    # date_entered = models.DateTimeField(_(""), auto_now=False, auto_now_add=False)
    # vender_invoices = models.CharField(_(""), max_length=50)
    # account_id = models.CharField(_(""), max_length=50)
    # message = models.TextField(blank=True, default='')
    # sales_tax_code = models.CharField(_(""), max_length=50)
    # sales_tax_code2 = models.CharField(_(""), max_length=50)
    # terms_discount = models.BooleanField(_(""))
    # disc_id = models.CharField(_(""), max_length=50)
    # dicount = models.DecimalField(_(""))
    # payment = models.DecimalField(_(""))
    # tax_mhr = models.BooleanField(_(""))
    # tax_freight = models.BooleanField(_(""))
    # tax_other = models.BooleanField(_(""))
    # total_mhr = models.IntegerField(_(""))
    # sales_tax = models.DecimalField(_(""))
    # sales_tax2 = models.DecimalField(_(""))
    order_total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    # sub_form = models.IntegerField(_(""))
    # cnt_id = auto number ?
    # order_type = models.CharField(_(""), max_length=50)
    # linked_orders = models.CharField(_(""), max_length=50)
    # print_cost = models.BooleanField(_(""))
    # created = models.DateTimeField(_(""), auto_now=False, auto_now_add=False)
    is_completed = models.BooleanField(default=False)
    
    def __str__(self):
        order = f"\nOrder - ID: {self.id}"
        order += f"\n   Created({self.entry_created_at.date()})    Modified({self.entry_modified_at.date()})"
        order += f"\n   Type: {self.order_type}"
        order += f"\n   Complete Status: {self.is_completed}"
        order += f"\n   Cancelled Status: {self.is_cancelled}"
        order += f"\n   Customer: ({self.customer_id})"
        
        return order + "\n"
 
    
    

class OrderDetail(models.Model):
    # foreign keys
    order_number = models.ForeignKey(Order, on_delete=models.DO_NOTHING)
    product_id = models.ForeignKey(Inventory, on_delete=models.DO_NOTHING)
#    accounting_id = models.ForeignKey(Accounting, on_delete=models.DO_NOTHING)
#    warehouse_id = models.ForeignKey(Warehouse, on_delete=models.DO_NOTHING)

    # attributes
    entry_created_at = models.DateTimeField(auto_now_add=True)
    entry_modified_at = models.DateTimeField(auto_now=True)
    qty_ordered = models.IntegerField(default=1)
#    qty_prev_shipped = models.IntegerField(_(""))
#    qty_back_ordered = models.IntegerField(_(""))
#    qty_shipped = models.IntegerField(_(""))
#    memo_description = models.CharField(_(""), max_length=50)
#    inventory_account_id = models.CharField(_(""), max_length=50)
#    cogs_account_id = models.CharField(_(""), max_length=50)
#    job_id = models.CharField(_(""), max_length=50)
#    man_hours_req = models.IntegerField(_(""))
#    discount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#    taxable = models.DecimalField(_(""))
#    unit_measure = models.CharField(_(""), max_length=50)
#    unit_measure_qty = models.FloatField(_(""))
#    weight = models.FloatField(_(""))
#    volume = models.FloatField(_(""))
#    sales_price = models.DecimalField(_(""))
#    count_id = models.PositiveIntegerField(_(""))
#    cost = models.DecimalField(max_digits=10, decimal_places=2)
#    detail_notes = models.CharField(_(""), max_length=50)

    class Meta:
        unique_together = (('order_number','product_id'),)

    def __str__(self):
        order = f"\nOrder Detail - ID: {self.id}"
        order += f"\n   Created({self.entry_created_at.date()})    Modified({self.entry_modified_at.date()})"
        order += f"\n   Quantity Ordered: {self.qty_ordered}"
        order += f"\n   Product: ({self.product_id})"
        order += f"\n   Order: ({self.order_number})"
        
        return order + "\n"

    def __str__(self):
        return f"\nOrderDetail - Order_ID: {self.order_number} Product: {self.product_id} Created Time: {self.entry_created_at} Last Updated: {self.entry_modified_at}\n"


#################################################
######     Top Tier Placeholder Models     ######
#################################################




######################################
######     Completed Models     ######
######################################



##################################################
######     Bottom Tier Dependent Models     ######
##################################################

class CustomerContactMethod(models.Model):
    CONTACT_TYPE_CHOICES = [
        ('email', 'Email'),
        ('phone', 'Phone'),
        ('fax', 'Fax'),
        ('social', 'Social Media'),
        ('other', 'Other')
    ]

    customer_id = models.ForeignKey(Customer, on_delete=models.DO_NOTHING, related_name='contact_methods')
    contact_method = models.CharField(max_length=255)
    contact_type = models.CharField(max_length=50, choices=CONTACT_TYPE_CHOICES)

    def __str__(self):
        return f"{self.customer.name} - {self.contact_type}: {self.contact_method}"