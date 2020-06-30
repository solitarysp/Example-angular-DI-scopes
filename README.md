# ExampleAngularDIScopes

Run `ng serve` đê start demo

# Branch master chỉ là code demo đê các branch khác clone

# Scopes Component
 `git checkout Example_Di_In_Component`
 

# Scopes Module
 `git checkout Example_DI_providers_in_SUb_Module_or_lazy_Module`
 
# Example chỉ có một instance duy nhất trên app kể cả khi Service không khai báo providedIn root và chúng ta khai báo ở App module
 `git checkout example_DI_Not_providedIn_Root_AND_provided_IN_APP_MODULE`

Chỉ có 1 instance duy nhất nếu chúng ta khai báo provided trong APP MODULE, Các module lazy load nếu không khai báo provided thì vẫn dùng 1 instance duy nhất đó

# Example_Di_ProvideIn_Root_And_Using_ProvideIn_App_Module
 `git checkout Example_Di_ProvideIn_Root_And_Using_ProvideIn_App_Module`
 Vẫn chỉ có 1 instance duy nhất nếu chúng ta khai báo providedIn root  trong service và khai báo serivce đó ở trong provided instance
