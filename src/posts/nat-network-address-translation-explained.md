---
title: NAT - Network Address Translation
description: Network Address Translation (NAT) is a vital internet technology that enables multiple devices to share a single public IP address, conserving IP resources and enhancing network security. NAT acts as a clever translator, allowing our devices to communicate with the internet while keeping them hidden behind the scenes. It's an essential element in the seamless functioning of our online world.
readTime: 3 mins
date: September 03, 2023
featured1: true
featured2: false
---


NAT (Network Address Translation) acts like a translator for devices within a local network. It allows them to share a single public IP address when connecting to the internet, providing security and conserving limited IPv4 addresses.

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/nat.gif)

<br>

## Let’s first talk about how things work on your local network

When you are connected to your Wi-Fi or router, you are already within a local network. This means that when you connected to the router, it assigned a private IP address to your device

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled.png)

When a device (Device 1) wants to connect to another device (Device 3) within the local server, it provides the destination IP address along with the port number in the URL, and then it types the specific route into the browser.

**1. First, after the network layer, we have the destination IP address and the port number, but we still need the MAC address. The system obtains the destination MAC address using ARP (Address Resolution Protocol).**

**2. ARP (Address Resolution Protocol) creates a broadcast message that is sent to all devices connected to the router. All the devices respond with their packets, and the router maps the IP addresses of all the devices with their corresponding MAC addresses, creating what is known as the ARP cache.**

**3. Since the destination IP address is within our local network, when the packets reach the router, the router acts like a switch and forwards the packets to the intended server by checking the MAC address.**

**4. It's important to note that while the router emits radio waves to all devices connected to it, not every data packet is broadcasted to every device. The radio waves cannot be intercepted by the other devices connected to the router.**

**5. As the intended server receives the request, it responds with the specific data, and this completes the connection.**

<br>

## When the server is over the internet

<br>

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled%201.png)

NAT is a mapping that is stored in the router. When a request from device 1 arrives at the router, it checks whether the destination is within the local network or over the internet. If it's over the internet, the router changes the private IP and port to its own public IP and port, and then forwards the request to the server. This is a type of firewall and a security measure to keep users' information private.

The mapping is stored in the router - 

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled%202.png)

**1. The request is created on the client with the destination IP and port. It first checks if the destination is on the local network or over the internet. If the destination is over the internet, the user creates a request and sends it to the router with the destination MAC address of the router.**

**2. When the request arrives at the router, the router checks the MAC address. If the MAC address is the router's MAC, the router forwards the request to the ISP by creating a NAT mapping.**

**3. The request arrives at the server over the internet with the source IP of the router, and thus the server responds with the specific data.**

<br>

## One to One NAT (Full-cone NAT)

<br>

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled%203.png)

This NAT allows anyone to create a connection, making it the least secure NAT configuration.
<br>

## Address Restricted NAT

<br>

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled%204.png)

This NAT allows the creation of a connection if a previous connection was made with the specific device, as it checks the NAT table.

<br>

## PORT Restricted NAT

<br>

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled%205.png)

This NAT checks both the address and the port. If found, it allows the connection.

<br>

## Symmetric NAT

<br>

![Untitled](NAT%20(Network%20Address%20Translation)%204ab5b8d710cd4787a9c2e5f1a9470560/Untitled%206.png)

This NAT configuration checks the external IP with the external port, along with the destination IP and destination port. If found, it allows the connection. This is the most secure NAT configuration.

<br>

## References


**[NAT Explained - Hussein Nasser](https://youtu.be/RG97rvw1eUo?si=X-d9Y-qvntnCeFLF)** (Helped a lot)