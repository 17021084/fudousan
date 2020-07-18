# Fudousan

This is Real estate web's application. It  find Real Estate and Real Estate s'News. 
##### Function

[Design in figma ](https://www.figma.com/file/KKvp3xu63mEhMaE1fpCjFp/Fudousan)

* Reserve deal 
* Manage properties
* Manage News
* Predict Properties 's Price
* Predict Loans to buy Properties
* ...

## Installation

Clone project:
```bash
git clone https://github.com/17021084/fudousan.git
```

then inport `fudousan.sql` ( in `/fudousan/fudousan.sql`) into your database. <br>

To run Precdict function in App . Change absolute path `CREDIT_DATA_PATH` and  `KOREA_HOME_DATA_PATH` in `.env` file. Trainning data in folder `/fudousan/Regression/data/`


## Usage

* Start mysql server
* Run 

```bash
npm start
```

