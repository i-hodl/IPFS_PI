# IPFS GUI

This is a simple web-based GUI for uploading files to IPFS, intended for use with a Raspberry Pi acting as the IPFS host.

## Prerequisites

Before getting started, you will need to have the IPFS daemon installed and running on your Raspberry Pi. If you have not already done so, you can follow the steps below:

1. Connect to your Raspberry Pi via SSH.

2. Install IPFS by running the following command: `sudo apt-get install ipfs`.

3. Initialize the IPFS daemon by running the following command: `ipfs init`.

4. Start the IPFS daemon by running the following command: `ipfs daemon`.

## Installation

To install the IPFS GUI, follow these steps:

1. Clone this repository to your Raspberry Pi by running the following command: `git clone https://github.com/i-hodl/IPFS_GUI.git`.

2. Navigate to the cloned repository by running the following command: `cd IPFS_GUI`.

3. Install the necessary dependencies by running the following command: `npm install`.

## Usage

To use the IPFS GUI, follow these steps:

1. Start the server by running the following command: `npm start`.

2. Navigate to the IP address of your Raspberry Pi in a web browser on another device on the same network, followed by the port number 3000. For example, if your Raspberry Pi has an IP address of 192.168.0.2, you would navigate to `http://192.168.0.2:3000` in your web browser.

3. Select a file to upload by clicking the "Choose File" button and selecting a file from your device.

4. Click the "Upload" button to upload the file to IPFS.

5. Once the file has been uploaded, a link to the file on IPFS will be displayed on the web page.

## Credits

This project was created by iH0DL.
