from django import forms
from django.core import validators

# customize function will be used inside the validators
def len_check(value):
    if len(value) < 10:
        raise forms.ValidationError("Enter a value at least 10 chars")

class djangoForm(forms.Form):
    name = forms.CharField(label="Full Name : ", widget=forms.TextInput(attrs={'id':'text_area', 'class':'class1 class2', 'placeholder':'Enter your name'}))
    email = forms.EmailField(label = "User Email")

    # gender = [('M', 'Male'), ('F', 'Female')]
    # sex = forms.ChoiceField(choices = gender, widget = forms.RadioSelect)

    address = forms.CharField(validators=[len_check])

    # birthday = forms.CharField(required=False, widget = forms.DateInput(attrs = {'type' : 'date'}))
  
    # appointment = forms.CharField(widget=forms.DateInput(attrs= {'type' : 'datetime-local'}))

    # meals = [('P', 'Pepperoni'), ('M', 'Mashroom'), ('B', 'Beef')]
    # item = forms.MultipleChoiceField(choices = meals, widget = forms.CheckboxSelectMultiple)

    # form validations: using django built-in validations by validators
    file = forms.FileField(label = 'Enter Your Profile Picture: ', validators=[validators.FileExtensionValidator(['jpg', 'jpeg', 'png'], message='Upload correct file type')])

    password = forms.CharField(label='Enter Password', widget=forms.PasswordInput)

    confirm_password = forms.CharField(label='Comfirm Your Password', widget=forms.PasswordInput)

    check = forms.BooleanField(help_text = "Terms and Conditions Accepted")

    # using manual validations
    def clean(self):
        cleaned_data = super().clean()
        # vname = self.cleaned_data['name']
        # if len(vname) < 6:
            # raise forms.ValidationError('Name should be at least 6 words')
        
        mail = self.cleaned_data['email']
        if not mail.endswith('.com'):
            raise forms.ValidationError('Mail must be end with .com')
        
        pas = self.cleaned_data['password']
        con_pas = self.cleaned_data['confirm_password']
        if pas != con_pas:
            raise forms.ValidationError("Password Doesn't matched")

        
    # for name validations by using built-in validators use the below attributes
    # validators=[validators.MinLengthValidator(5, message='Required at least 5 characters')]