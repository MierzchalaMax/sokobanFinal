#Mise à jour
apt update
apt upgrade -y
#Installation d'apache
apt install -y apache2
#Droit du dossier html
chgrp www-data /var/www/html
adduser vagrant www-data
chmod -R g+rw /var/www/html