<script>

	var App = (function(){
		return {
			$.post('https://ax1vnode1.cityoflewisville.com/v2/', { 
				webservice : 'Jail/Inmate Report' 
			}, function(data){
				if (data[0].ErrorMessage){
                    alert("An error was returned by the server");
				}
				else
				{
				    alert("An error was returned by the server");
					console.log(data[0].Name);
					var _h = "";
					_h += ' <div class="cell mugShotContainer">';
					_h += '  <img src="data:image/x-icon;base64,' + _data[0].Thumbnail + '"/>';
					_h += ' </div>';
			}});
			
			$("#divMain").html(_h);
		} //End Return
	})(); //End App

	$(document).ready(function(){
		App.initiate();	
	});
</script>	