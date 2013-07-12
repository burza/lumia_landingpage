# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu-12.10"
  # config.vm.box_url = "https://jimdo-vagrant-boxes.s3.amazonaws.com/jimdo-debian-6.0.7.box"
  # config.vm.network :private_network, ip: "10.10.10.10"
  
  config.vm.network :forwarded_port, guest: 80, host: 8080
  config.vm.network :public_network

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  config.vm.provision :shell, :path => "vagrant.sh"
end
