# Generated by Django 5.0.6 on 2024-07-12 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_orderdetail_unique_together_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='type',
            new_name='order_type',
        ),
    ]
