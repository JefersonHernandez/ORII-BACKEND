import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Programa } from "../entity/Programa";
import { Facultad } from "../entity/Facultad";

export class CountryController {



    static getPaises = async (req: Request, res: Response) => {
       
              res.status(200).json(
                [
                  {
                      "nombre": "Afghanistan",
                      "codigoPais": "AF"
                  },
                  {
                      "nombre": "Aland Islands",
                      "codigoPais": "AX"
                  },
                  {
                      "nombre": "Albania",
                      "codigoPais": "AL"
                  },
                  {
                      "nombre": "Algeria",
                      "codigoPais": "DZ"
                  },
                  {
                      "nombre": "American Samoa",
                      "codigoPais": "AS"
                  },
                  {
                      "nombre": "Andorra",
                      "codigoPais": "AD"
                  },
                  {
                      "nombre": "Angola",
                      "codigoPais": "AO"
                  },
                  {
                      "nombre": "Anguilla",
                      "codigoPais": "AI"
                  },
                  {
                      "nombre": "Antarctica",
                      "codigoPais": "AQ"
                  },
                  {
                      "nombre": "Antigua and Barbuda",
                      "codigoPais": "AG"
                  },
                  {
                      "nombre": "Argentina",
                      "codigoPais": "AR"
                  },
                  {
                      "nombre": "Armenia",
                      "codigoPais": "AM"
                  },
                  {
                      "nombre": "Aruba",
                      "codigoPais": "AW"
                  },
                  {
                      "nombre": "Australia",
                      "codigoPais": "AU"
                  },
                  {
                      "nombre": "Austria",
                      "codigoPais": "AT"
                  },
                  {
                      "nombre": "Azerbaijan",
                      "codigoPais": "AZ"
                  },
                  {
                      "nombre": "Bahamas",
                      "codigoPais": "BS"
                  },
                  {
                      "nombre": "Bahrain",
                      "codigoPais": "BH"
                  },
                  {
                      "nombre": "Bangladesh",
                      "codigoPais": "BD"
                  },
                  {
                      "nombre": "Barbados",
                      "codigoPais": "BB"
                  },
                  {
                      "nombre": "Belarus",
                      "codigoPais": "BY"
                  },
                  {
                      "nombre": "Belgium",
                      "codigoPais": "BE"
                  },
                  {
                      "nombre": "Belize",
                      "codigoPais": "BZ"
                  },
                  {
                      "nombre": "Benin",
                      "codigoPais": "BJ"
                  },
                  {
                      "nombre": "Bermuda",
                      "codigoPais": "BM"
                  },
                  {
                      "nombre": "Bhutan",
                      "codigoPais": "BT"
                  },
                  {
                      "nombre": "Bolivia",
                      "codigoPais": "BO"
                  },
                  {
                      "nombre": "Bonaire, Saint Eustatius and Saba ",
                      "codigoPais": "BQ"
                  },
                  {
                      "nombre": "Bosnia and Herzegovina",
                      "codigoPais": "BA"
                  },
                  {
                      "nombre": "Botswana",
                      "codigoPais": "BW"
                  },
                  {
                      "nombre": "Bouvet Island",
                      "codigoPais": "BV"
                  },
                  {
                      "nombre": "Brazil",
                      "codigoPais": "BR"
                  },
                  {
                      "nombre": "British Indian Ocean Territory",
                      "codigoPais": "IO"
                  },
                  {
                      "nombre": "British Virgin Islands",
                      "codigoPais": "VG"
                  },
                  {
                      "nombre": "Brunei",
                      "codigoPais": "BN"
                  },
                  {
                      "nombre": "Bulgaria",
                      "codigoPais": "BG"
                  },
                  {
                      "nombre": "Burkina Faso",
                      "codigoPais": "BF"
                  },
                  {
                      "nombre": "Burundi",
                      "codigoPais": "BI"
                  },
                  {
                      "nombre": "Cambodia",
                      "codigoPais": "KH"
                  },
                  {
                      "nombre": "Cameroon",
                      "codigoPais": "CM"
                  },
                  {
                      "nombre": "Canada",
                      "codigoPais": "CA"
                  },
                  {
                      "nombre": "Cape Verde",
                      "codigoPais": "CV"
                  },
                  {
                      "nombre": "Cayman Islands",
                      "codigoPais": "KY"
                  },
                  {
                      "nombre": "Central African Republic",
                      "codigoPais": "CF"
                  },
                  {
                      "nombre": "Chad",
                      "codigoPais": "TD"
                  },
                  {
                      "nombre": "Chile",
                      "codigoPais": "CL"
                  },
                  {
                      "nombre": "China",
                      "codigoPais": "CN"
                  },
                  {
                      "nombre": "Christmas Island",
                      "codigoPais": "CX"
                  },
                  {
                      "nombre": "Cocos Islands",
                      "codigoPais": "CC"
                  },
                  {
                      "nombre": "Colombia",
                      "codigoPais": "CO"
                  },
                  {
                      "nombre": "Comoros",
                      "codigoPais": "KM"
                  },
                  {
                      "nombre": "Cook Islands",
                      "codigoPais": "CK"
                  },
                  {
                      "nombre": "Costa Rica",
                      "codigoPais": "CR"
                  },
                  {
                      "nombre": "Croatia",
                      "codigoPais": "HR"
                  },
                  {
                      "nombre": "Cuba",
                      "codigoPais": "CU"
                  },
                  {
                      "nombre": "Curacao",
                      "codigoPais": "CW"
                  },
                  {
                      "nombre": "Cyprus",
                      "codigoPais": "CY"
                  },
                  {
                      "nombre": "Czech Republic",
                      "codigoPais": "CZ"
                  },
                  {
                      "nombre": "Democratic Republic of the Congo",
                      "codigoPais": "CD"
                  },
                  {
                      "nombre": "Denmark",
                      "codigoPais": "DK"
                  },
                  {
                      "nombre": "Djibouti",
                      "codigoPais": "DJ"
                  },
                  {
                      "nombre": "Dominica",
                      "codigoPais": "DM"
                  },
                  {
                      "nombre": "Dominican Republic",
                      "codigoPais": "DO"
                  },
                  {
                      "nombre": "East Timor",
                      "codigoPais": "TL"
                  },
                  {
                      "nombre": "Ecuador",
                      "codigoPais": "EC"
                  },
                  {
                      "nombre": "Egypt",
                      "codigoPais": "EG"
                  },
                  {
                      "nombre": "El Salvador",
                      "codigoPais": "SV"
                  },
                  {
                      "nombre": "Equatorial Guinea",
                      "codigoPais": "GQ"
                  },
                  {
                      "nombre": "Eritrea",
                      "codigoPais": "ER"
                  },
                  {
                      "nombre": "Estonia",
                      "codigoPais": "EE"
                  },
                  {
                      "nombre": "Ethiopia",
                      "codigoPais": "ET"
                  },
                  {
                      "nombre": "Falkland Islands",
                      "codigoPais": "FK"
                  },
                  {
                      "nombre": "Faroe Islands",
                      "codigoPais": "FO"
                  },
                  {
                      "nombre": "Fiji",
                      "codigoPais": "FJ"
                  },
                  {
                      "nombre": "Finland",
                      "codigoPais": "FI"
                  },
                  {
                      "nombre": "France",
                      "codigoPais": "FR"
                  },
                  {
                      "nombre": "French Guiana",
                      "codigoPais": "GF"
                  },
                  {
                      "nombre": "French Polynesia",
                      "codigoPais": "PF"
                  },
                  {
                      "nombre": "French Southern Territories",
                      "codigoPais": "TF"
                  },
                  {
                      "nombre": "Gabon",
                      "codigoPais": "GA"
                  },
                  {
                      "nombre": "Gambia",
                      "codigoPais": "GM"
                  },
                  {
                      "nombre": "Georgia",
                      "codigoPais": "GE"
                  },
                  {
                      "nombre": "Germany",
                      "codigoPais": "DE"
                  },
                  {
                      "nombre": "Ghana",
                      "codigoPais": "GH"
                  },
                  {
                      "nombre": "Gibraltar",
                      "codigoPais": "GI"
                  },
                  {
                      "nombre": "Greece",
                      "codigoPais": "GR"
                  },
                  {
                      "nombre": "Greenland",
                      "codigoPais": "GL"
                  },
                  {
                      "nombre": "Grenada",
                      "codigoPais": "GD"
                  },
                  {
                      "nombre": "Guadeloupe",
                      "codigoPais": "GP"
                  },
                  {
                      "nombre": "Guam",
                      "codigoPais": "GU"
                  },
                  {
                      "nombre": "Guatemala",
                      "codigoPais": "GT"
                  },
                  {
                      "nombre": "Guernsey",
                      "codigoPais": "GG"
                  },
                  {
                      "nombre": "Guinea",
                      "codigoPais": "GN"
                  },
                  {
                      "nombre": "Guinea-Bissau",
                      "codigoPais": "GW"
                  },
                  {
                      "nombre": "Guyana",
                      "codigoPais": "GY"
                  },
                  {
                      "nombre": "Haiti",
                      "codigoPais": "HT"
                  },
                  {
                      "nombre": "Heard Island and McDonald Islands",
                      "codigoPais": "HM"
                  },
                  {
                      "nombre": "Honduras",
                      "codigoPais": "HN"
                  },
                  {
                      "nombre": "Hong Kong",
                      "codigoPais": "HK"
                  },
                  {
                      "nombre": "Hungary",
                      "codigoPais": "HU"
                  },
                  {
                      "nombre": "Iceland",
                      "codigoPais": "IS"
                  },
                  {
                      "nombre": "India",
                      "codigoPais": "IN"
                  },
                  {
                      "nombre": "Indonesia",
                      "codigoPais": "ID"
                  },
                  {
                      "nombre": "Iran",
                      "codigoPais": "IR"
                  },
                  {
                      "nombre": "Iraq",
                      "codigoPais": "IQ"
                  },
                  {
                      "nombre": "Ireland",
                      "codigoPais": "IE"
                  },
                  {
                      "nombre": "Isle of Man",
                      "codigoPais": "IM"
                  },
                  {
                      "nombre": "Israel",
                      "codigoPais": "IL"
                  },
                  {
                      "nombre": "Italy",
                      "codigoPais": "IT"
                  },
                  {
                      "nombre": "Ivory Coast",
                      "codigoPais": "CI"
                  },
                  {
                      "nombre": "Jamaica",
                      "codigoPais": "JM"
                  },
                  {
                      "nombre": "Japan",
                      "codigoPais": "JP"
                  },
                  {
                      "nombre": "Jersey",
                      "codigoPais": "JE"
                  },
                  {
                      "nombre": "Jordan",
                      "codigoPais": "JO"
                  },
                  {
                      "nombre": "Kazakhstan",
                      "codigoPais": "KZ"
                  },
                  {
                      "nombre": "Kenya",
                      "codigoPais": "KE"
                  },
                  {
                      "nombre": "Kiribati",
                      "codigoPais": "KI"
                  },
                  {
                      "nombre": "Kosovo",
                      "codigoPais": "XK"
                  },
                  {
                      "nombre": "Kuwait",
                      "codigoPais": "KW"
                  },
                  {
                      "nombre": "Kyrgyzstan",
                      "codigoPais": "KG"
                  },
                  {
                      "nombre": "Laos",
                      "codigoPais": "LA"
                  },
                  {
                      "nombre": "Latvia",
                      "codigoPais": "LV"
                  },
                  {
                      "nombre": "Lebanon",
                      "codigoPais": "LB"
                  },
                  {
                      "nombre": "Lesotho",
                      "codigoPais": "LS"
                  },
                  {
                      "nombre": "Liberia",
                      "codigoPais": "LR"
                  },
                  {
                      "nombre": "Libya",
                      "codigoPais": "LY"
                  },
                  {
                      "nombre": "Liechtenstein",
                      "codigoPais": "LI"
                  },
                  {
                      "nombre": "Lithuania",
                      "codigoPais": "LT"
                  },
                  {
                      "nombre": "Luxembourg",
                      "codigoPais": "LU"
                  },
                  {
                      "nombre": "Macao",
                      "codigoPais": "MO"
                  },
                  {
                      "nombre": "Macedonia",
                      "codigoPais": "MK"
                  },
                  {
                      "nombre": "Madagascar",
                      "codigoPais": "MG"
                  },
                  {
                      "nombre": "Malawi",
                      "codigoPais": "MW"
                  },
                  {
                      "nombre": "Malaysia",
                      "codigoPais": "MY"
                  },
                  {
                      "nombre": "Maldives",
                      "codigoPais": "MV"
                  },
                  {
                      "nombre": "Mali",
                      "codigoPais": "ML"
                  },
                  {
                      "nombre": "Malta",
                      "codigoPais": "MT"
                  },
                  {
                      "nombre": "Marshall Islands",
                      "codigoPais": "MH"
                  },
                  {
                      "nombre": "Martinique",
                      "codigoPais": "MQ"
                  },
                  {
                      "nombre": "Mauritania",
                      "codigoPais": "MR"
                  },
                  {
                      "nombre": "Mauritius",
                      "codigoPais": "MU"
                  },
                  {
                      "nombre": "Mayotte",
                      "codigoPais": "YT"
                  },
                  {
                      "nombre": "Mexico",
                      "codigoPais": "MX"
                  },
                  {
                      "nombre": "Micronesia",
                      "codigoPais": "FM"
                  },
                  {
                      "nombre": "Moldova",
                      "codigoPais": "MD"
                  },
                  {
                      "nombre": "Monaco",
                      "codigoPais": "MC"
                  },
                  {
                      "nombre": "Mongolia",
                      "codigoPais": "MN"
                  },
                  {
                      "nombre": "Montenegro",
                      "codigoPais": "ME"
                  },
                  {
                      "nombre": "Montserrat",
                      "codigoPais": "MS"
                  },
                  {
                      "nombre": "Morocco",
                      "codigoPais": "MA"
                  },
                  {
                      "nombre": "Mozambique",
                      "codigoPais": "MZ"
                  },
                  {
                      "nombre": "Myanmar",
                      "codigoPais": "MM"
                  },
                  {
                      "nombre": "Namibia",
                      "codigoPais": "NA"
                  },
                  {
                      "nombre": "Nauru",
                      "codigoPais": "NR"
                  },
                  {
                      "nombre": "Nepal",
                      "codigoPais": "NP"
                  },
                  {
                      "nombre": "Netherlands",
                      "codigoPais": "NL"
                  },
                  {
                      "nombre": "New Caledonia",
                      "codigoPais": "NC"
                  },
                  {
                      "nombre": "New Zealand",
                      "codigoPais": "NZ"
                  },
                  {
                      "nombre": "Nicaragua",
                      "codigoPais": "NI"
                  },
                  {
                      "nombre": "Niger",
                      "codigoPais": "NE"
                  },
                  {
                      "nombre": "Nigeria",
                      "codigoPais": "NG"
                  },
                  {
                      "nombre": "Niue",
                      "codigoPais": "NU"
                  },
                  {
                      "nombre": "Norfolk Island",
                      "codigoPais": "NF"
                  },
                  {
                      "nombre": "North Korea",
                      "codigoPais": "KP"
                  },
                  {
                      "nombre": "Northern Mariana Islands",
                      "codigoPais": "MP"
                  },
                  {
                      "nombre": "Norway",
                      "codigoPais": "NO"
                  },
                  {
                      "nombre": "Oman",
                      "codigoPais": "OM"
                  },
                  {
                      "nombre": "Pakistan",
                      "codigoPais": "PK"
                  },
                  {
                      "nombre": "Palau",
                      "codigoPais": "PW"
                  },
                  {
                      "nombre": "Palestinian Territory",
                      "codigoPais": "PS"
                  },
                  {
                      "nombre": "Panama",
                      "codigoPais": "PA"
                  },
                  {
                      "nombre": "Papua New Guinea",
                      "codigoPais": "PG"
                  },
                  {
                      "nombre": "Paraguay",
                      "codigoPais": "PY"
                  },
                  {
                      "nombre": "Peru",
                      "codigoPais": "PE"
                  },
                  {
                      "nombre": "Philippines",
                      "codigoPais": "PH"
                  },
                  {
                      "nombre": "Pitcairn",
                      "codigoPais": "PN"
                  },
                  {
                      "nombre": "Poland",
                      "codigoPais": "PL"
                  },
                  {
                      "nombre": "Portugal",
                      "codigoPais": "PT"
                  },
                  {
                      "nombre": "Puerto Rico",
                      "codigoPais": "PR"
                  },
                  {
                      "nombre": "Qatar",
                      "codigoPais": "QA"
                  },
                  {
                      "nombre": "Republic of the Congo",
                      "codigoPais": "CG"
                  },
                  {
                      "nombre": "Reunion",
                      "codigoPais": "RE"
                  },
                  {
                      "nombre": "Romania",
                      "codigoPais": "RO"
                  },
                  {
                      "nombre": "Russia",
                      "codigoPais": "RU"
                  },
                  {
                      "nombre": "Rwanda",
                      "codigoPais": "RW"
                  },
                  {
                      "nombre": "Saint Barthelemy",
                      "codigoPais": "BL"
                  },
                  {
                      "nombre": "Saint Helena",
                      "codigoPais": "SH"
                  },
                  {
                      "nombre": "Saint Kitts and Nevis",
                      "codigoPais": "KN"
                  },
                  {
                      "nombre": "Saint Lucia",
                      "codigoPais": "LC"
                  },
                  {
                      "nombre": "Saint Martin",
                      "codigoPais": "MF"
                  },
                  {
                      "nombre": "Saint Pierre and Miquelon",
                      "codigoPais": "PM"
                  },
                  {
                      "nombre": "Saint Vincent and the Grenadines",
                      "codigoPais": "VC"
                  },
                  {
                      "nombre": "Samoa",
                      "codigoPais": "WS"
                  },
                  {
                      "nombre": "San Marino",
                      "codigoPais": "SM"
                  },
                  {
                      "nombre": "Sao Tome and Principe",
                      "codigoPais": "ST"
                  },
                  {
                      "nombre": "Saudi Arabia",
                      "codigoPais": "SA"
                  },
                  {
                      "nombre": "Senegal",
                      "codigoPais": "SN"
                  },
                  {
                      "nombre": "Serbia",
                      "codigoPais": "RS"
                  },
                  {
                      "nombre": "Seychelles",
                      "codigoPais": "SC"
                  },
                  {
                      "nombre": "Sierra Leone",
                      "codigoPais": "SL"
                  },
                  {
                      "nombre": "Singapore",
                      "codigoPais": "SG"
                  },
                  {
                      "nombre": "Sint Maarten",
                      "codigoPais": "SX"
                  },
                  {
                      "nombre": "Slovakia",
                      "codigoPais": "SK"
                  },
                  {
                      "nombre": "Slovenia",
                      "codigoPais": "SI"
                  },
                  {
                      "nombre": "Solomon Islands",
                      "codigoPais": "SB"
                  },
                  {
                      "nombre": "Somalia",
                      "codigoPais": "SO"
                  },
                  {
                      "nombre": "South Africa",
                      "codigoPais": "ZA"
                  },
                  {
                      "nombre": "South Georgia and the South Sandwich Islands",
                      "codigoPais": "GS"
                  },
                  {
                      "nombre": "South Korea",
                      "codigoPais": "KR"
                  },
                  {
                      "nombre": "South Sudan",
                      "codigoPais": "SS"
                  },
                  {
                      "nombre": "Spain",
                      "codigoPais": "ES"
                  },
                  {
                      "nombre": "Sri Lanka",
                      "codigoPais": "LK"
                  },
                  {
                      "nombre": "Sudan",
                      "codigoPais": "SD"
                  },
                  {
                      "nombre": "Suriname",
                      "codigoPais": "SR"
                  },
                  {
                      "nombre": "Svalbard and Jan Mayen",
                      "codigoPais": "SJ"
                  },
                  {
                      "nombre": "Swaziland",
                      "codigoPais": "SZ"
                  },
                  {
                      "nombre": "Sweden",
                      "codigoPais": "SE"
                  },
                  {
                      "nombre": "Switzerland",
                      "codigoPais": "CH"
                  },
                  {
                      "nombre": "Syria",
                      "codigoPais": "SY"
                  },
                  {
                      "nombre": "Taiwan",
                      "codigoPais": "TW"
                  },
                  {
                      "nombre": "Tajikistan",
                      "codigoPais": "TJ"
                  },
                  {
                      "nombre": "Tanzania",
                      "codigoPais": "TZ"
                  },
                  {
                      "nombre": "Thailand",
                      "codigoPais": "TH"
                  },
                  {
                      "nombre": "Togo",
                      "codigoPais": "TG"
                  },
                  {
                      "nombre": "Tokelau",
                      "codigoPais": "TK"
                  },
                  {
                      "nombre": "Tonga",
                      "codigoPais": "TO"
                  },
                  {
                      "nombre": "Trinidad and Tobago",
                      "codigoPais": "TT"
                  },
                  {
                      "nombre": "Tunisia",
                      "codigoPais": "TN"
                  },
                  {
                      "nombre": "Turkey",
                      "codigoPais": "TR"
                  },
                  {
                      "nombre": "Turkmenistan",
                      "codigoPais": "TM"
                  },
                  {
                      "nombre": "Turks and Caicos Islands",
                      "codigoPais": "TC"
                  },
                  {
                      "nombre": "Tuvalu",
                      "codigoPais": "TV"
                  },
                  {
                      "nombre": "U.S. Virgin Islands",
                      "codigoPais": "VI"
                  },
                  {
                      "nombre": "Uganda",
                      "codigoPais": "UG"
                  },
                  {
                      "nombre": "Ukraine",
                      "codigoPais": "UA"
                  },
                  {
                      "nombre": "United Arab Emirates",
                      "codigoPais": "AE"
                  },
                  {
                      "nombre": "United Kingdom",
                      "codigoPais": "GB"
                  },
                  {
                      "nombre": "United States",
                      "codigoPais": "US"
                  },
                  {
                      "nombre": "United States Minor Outlying Islands",
                      "codigoPais": "UM"
                  },
                  {
                      "nombre": "Uruguay",
                      "codigoPais": "UY"
                  },
                  {
                      "nombre": "Uzbekistan",
                      "codigoPais": "UZ"
                  },
                  {
                      "nombre": "Vanuatu",
                      "codigoPais": "VU"
                  },
                  {
                      "nombre": "Vatican",
                      "codigoPais": "VA"
                  },
                  {
                      "nombre": "Venezuela",
                      "codigoPais": "VE"
                  },
                  {
                      "nombre": "Vietnam",
                      "codigoPais": "VN"
                  },
                  {
                      "nombre": "Wallis and Futuna",
                      "codigoPais": "WF"
                  },
                  {
                      "nombre": "Western Sahara",
                      "codigoPais": "EH"
                  },
                  {
                      "nombre": "Yemen",
                      "codigoPais": "YE"
                  },
                  {
                      "nombre": "Zambia",
                      "codigoPais": "ZM"
                  },
                  {
                      "nombre": "Zimbabwe",
                      "codigoPais": "ZW"
                  }
              ]
              );
            }  

    static getCodigos = async (req: Request, res: Response) => {
      res.status(200).json(
        [
          {
              "indicativo": "",
              "codigoPais": "BV"
          },
          {
              "indicativo": "",
              "codigoPais": "GS"
          },
          {
              "indicativo": "",
              "codigoPais": "XK"
          },
          {
              "indicativo": "",
              "codigoPais": "TF"
          },
          {
              "indicativo": "",
              "codigoPais": "AQ"
          },
          {
              "indicativo": " ",
              "codigoPais": "HM"
          },
          {
              "indicativo": "+1-242",
              "codigoPais": "BS"
          },
          {
              "indicativo": "+1-246",
              "codigoPais": "BB"
          },
          {
              "indicativo": "+1-264",
              "codigoPais": "AI"
          },
          {
              "indicativo": "+1-268",
              "codigoPais": "AG"
          },
          {
              "indicativo": "+1-284",
              "codigoPais": "VG"
          },
          {
              "indicativo": "+1-340",
              "codigoPais": "VI"
          },
          {
              "indicativo": "+1-345",
              "codigoPais": "KY"
          },
          {
              "indicativo": "+1-441",
              "codigoPais": "BM"
          },
          {
              "indicativo": "+1-473",
              "codigoPais": "GD"
          },
          {
              "indicativo": "+1-649",
              "codigoPais": "TC"
          },
          {
              "indicativo": "+1-664",
              "codigoPais": "MS"
          },
          {
              "indicativo": "+1-670",
              "codigoPais": "MP"
          },
          {
              "indicativo": "+1-671",
              "codigoPais": "GU"
          },
          {
              "indicativo": "+1-684",
              "codigoPais": "AS"
          },
          {
              "indicativo": "+1-758",
              "codigoPais": "LC"
          },
          {
              "indicativo": "+1-767",
              "codigoPais": "DM"
          },
          {
              "indicativo": "+1-784",
              "codigoPais": "VC"
          },
          {
              "indicativo": "+1-787 and 1-939",
              "codigoPais": "PR"
          },
          {
              "indicativo": "+1-809 and 1-829",
              "codigoPais": "DO"
          },
          {
              "indicativo": "+1-868",
              "codigoPais": "TT"
          },
          {
              "indicativo": "+1-869",
              "codigoPais": "KN"
          },
          {
              "indicativo": "+1-876",
              "codigoPais": "JM"
          },
          {
              "indicativo": "+358-18",
              "codigoPais": "AX"
          },
          {
              "indicativo": "+44-1481",
              "codigoPais": "GG"
          },
          {
              "indicativo": "+44-1534",
              "codigoPais": "JE"
          },
          {
              "indicativo": "+44-1624",
              "codigoPais": "IM"
          },
          {
              "indicativo": "1",
              "codigoPais": "CA"
          },
          {
              "indicativo": "1",
              "codigoPais": "US"
          },
          {
              "indicativo": "1",
              "codigoPais": "UM"
          },
          {
              "indicativo": "20",
              "codigoPais": "EG"
          },
          {
              "indicativo": "211",
              "codigoPais": "SS"
          },
          {
              "indicativo": "212",
              "codigoPais": "EH"
          },
          {
              "indicativo": "212",
              "codigoPais": "MA"
          },
          {
              "indicativo": "213",
              "codigoPais": "DZ"
          },
          {
              "indicativo": "216",
              "codigoPais": "TN"
          },
          {
              "indicativo": "218",
              "codigoPais": "LY"
          },
          {
              "indicativo": "220",
              "codigoPais": "GM"
          },
          {
              "indicativo": "221",
              "codigoPais": "SN"
          },
          {
              "indicativo": "222",
              "codigoPais": "MR"
          },
          {
              "indicativo": "223",
              "codigoPais": "ML"
          },
          {
              "indicativo": "224",
              "codigoPais": "GN"
          },
          {
              "indicativo": "225",
              "codigoPais": "CI"
          },
          {
              "indicativo": "226",
              "codigoPais": "BF"
          },
          {
              "indicativo": "227",
              "codigoPais": "NE"
          },
          {
              "indicativo": "228",
              "codigoPais": "TG"
          },
          {
              "indicativo": "229",
              "codigoPais": "BJ"
          },
          {
              "indicativo": "230",
              "codigoPais": "MU"
          },
          {
              "indicativo": "231",
              "codigoPais": "LR"
          },
          {
              "indicativo": "232",
              "codigoPais": "SL"
          },
          {
              "indicativo": "233",
              "codigoPais": "GH"
          },
          {
              "indicativo": "234",
              "codigoPais": "NG"
          },
          {
              "indicativo": "235",
              "codigoPais": "TD"
          },
          {
              "indicativo": "236",
              "codigoPais": "CF"
          },
          {
              "indicativo": "237",
              "codigoPais": "CM"
          },
          {
              "indicativo": "238",
              "codigoPais": "CV"
          },
          {
              "indicativo": "239",
              "codigoPais": "ST"
          },
          {
              "indicativo": "240",
              "codigoPais": "GQ"
          },
          {
              "indicativo": "241",
              "codigoPais": "GA"
          },
          {
              "indicativo": "242",
              "codigoPais": "CG"
          },
          {
              "indicativo": "243",
              "codigoPais": "CD"
          },
          {
              "indicativo": "244",
              "codigoPais": "AO"
          },
          {
              "indicativo": "245",
              "codigoPais": "GW"
          },
          {
              "indicativo": "246",
              "codigoPais": "IO"
          },
          {
              "indicativo": "248",
              "codigoPais": "SC"
          },
          {
              "indicativo": "249",
              "codigoPais": "SD"
          },
          {
              "indicativo": "250",
              "codigoPais": "RW"
          },
          {
              "indicativo": "251",
              "codigoPais": "ET"
          },
          {
              "indicativo": "252",
              "codigoPais": "SO"
          },
          {
              "indicativo": "253",
              "codigoPais": "DJ"
          },
          {
              "indicativo": "254",
              "codigoPais": "KE"
          },
          {
              "indicativo": "255",
              "codigoPais": "TZ"
          },
          {
              "indicativo": "256",
              "codigoPais": "UG"
          },
          {
              "indicativo": "257",
              "codigoPais": "BI"
          },
          {
              "indicativo": "258",
              "codigoPais": "MZ"
          },
          {
              "indicativo": "260",
              "codigoPais": "ZM"
          },
          {
              "indicativo": "261",
              "codigoPais": "MG"
          },
          {
              "indicativo": "262",
              "codigoPais": "RE"
          },
          {
              "indicativo": "262",
              "codigoPais": "YT"
          },
          {
              "indicativo": "263",
              "codigoPais": "ZW"
          },
          {
              "indicativo": "264",
              "codigoPais": "NA"
          },
          {
              "indicativo": "265",
              "codigoPais": "MW"
          },
          {
              "indicativo": "266",
              "codigoPais": "LS"
          },
          {
              "indicativo": "267",
              "codigoPais": "BW"
          },
          {
              "indicativo": "268",
              "codigoPais": "SZ"
          },
          {
              "indicativo": "269",
              "codigoPais": "KM"
          },
          {
              "indicativo": "27",
              "codigoPais": "ZA"
          },
          {
              "indicativo": "290",
              "codigoPais": "SH"
          },
          {
              "indicativo": "291",
              "codigoPais": "ER"
          },
          {
              "indicativo": "297",
              "codigoPais": "AW"
          },
          {
              "indicativo": "298",
              "codigoPais": "FO"
          },
          {
              "indicativo": "299",
              "codigoPais": "GL"
          },
          {
              "indicativo": "30",
              "codigoPais": "GR"
          },
          {
              "indicativo": "31",
              "codigoPais": "NL"
          },
          {
              "indicativo": "32",
              "codigoPais": "BE"
          },
          {
              "indicativo": "33",
              "codigoPais": "FR"
          },
          {
              "indicativo": "34",
              "codigoPais": "ES"
          },
          {
              "indicativo": "350",
              "codigoPais": "GI"
          },
          {
              "indicativo": "351",
              "codigoPais": "PT"
          },
          {
              "indicativo": "352",
              "codigoPais": "LU"
          },
          {
              "indicativo": "353",
              "codigoPais": "IE"
          },
          {
              "indicativo": "354",
              "codigoPais": "IS"
          },
          {
              "indicativo": "355",
              "codigoPais": "AL"
          },
          {
              "indicativo": "356",
              "codigoPais": "MT"
          },
          {
              "indicativo": "357",
              "codigoPais": "CY"
          },
          {
              "indicativo": "358",
              "codigoPais": "FI"
          },
          {
              "indicativo": "359",
              "codigoPais": "BG"
          },
          {
              "indicativo": "36",
              "codigoPais": "HU"
          },
          {
              "indicativo": "370",
              "codigoPais": "LT"
          },
          {
              "indicativo": "371",
              "codigoPais": "LV"
          },
          {
              "indicativo": "372",
              "codigoPais": "EE"
          },
          {
              "indicativo": "373",
              "codigoPais": "MD"
          },
          {
              "indicativo": "374",
              "codigoPais": "AM"
          },
          {
              "indicativo": "375",
              "codigoPais": "BY"
          },
          {
              "indicativo": "376",
              "codigoPais": "AD"
          },
          {
              "indicativo": "377",
              "codigoPais": "MC"
          },
          {
              "indicativo": "378",
              "codigoPais": "SM"
          },
          {
              "indicativo": "379",
              "codigoPais": "VA"
          },
          {
              "indicativo": "380",
              "codigoPais": "UA"
          },
          {
              "indicativo": "381",
              "codigoPais": "RS"
          },
          {
              "indicativo": "382",
              "codigoPais": "ME"
          },
          {
              "indicativo": "385",
              "codigoPais": "HR"
          },
          {
              "indicativo": "386",
              "codigoPais": "SI"
          },
          {
              "indicativo": "387",
              "codigoPais": "BA"
          },
          {
              "indicativo": "389",
              "codigoPais": "MK"
          },
          {
              "indicativo": "39",
              "codigoPais": "IT"
          },
          {
              "indicativo": "40",
              "codigoPais": "RO"
          },
          {
              "indicativo": "41",
              "codigoPais": "CH"
          },
          {
              "indicativo": "420",
              "codigoPais": "CZ"
          },
          {
              "indicativo": "421",
              "codigoPais": "SK"
          },
          {
              "indicativo": "423",
              "codigoPais": "LI"
          },
          {
              "indicativo": "43",
              "codigoPais": "AT"
          },
          {
              "indicativo": "44",
              "codigoPais": "GB"
          },
          {
              "indicativo": "45",
              "codigoPais": "DK"
          },
          {
              "indicativo": "46",
              "codigoPais": "SE"
          },
          {
              "indicativo": "47",
              "codigoPais": "SJ"
          },
          {
              "indicativo": "47",
              "codigoPais": "NO"
          },
          {
              "indicativo": "48",
              "codigoPais": "PL"
          },
          {
              "indicativo": "49",
              "codigoPais": "DE"
          },
          {
              "indicativo": "500",
              "codigoPais": "FK"
          },
          {
              "indicativo": "501",
              "codigoPais": "BZ"
          },
          {
              "indicativo": "502",
              "codigoPais": "GT"
          },
          {
              "indicativo": "503",
              "codigoPais": "SV"
          },
          {
              "indicativo": "504",
              "codigoPais": "HN"
          },
          {
              "indicativo": "505",
              "codigoPais": "NI"
          },
          {
              "indicativo": "506",
              "codigoPais": "CR"
          },
          {
              "indicativo": "507",
              "codigoPais": "PA"
          },
          {
              "indicativo": "508",
              "codigoPais": "PM"
          },
          {
              "indicativo": "509",
              "codigoPais": "HT"
          },
          {
              "indicativo": "51",
              "codigoPais": "PE"
          },
          {
              "indicativo": "52",
              "codigoPais": "MX"
          },
          {
              "indicativo": "53",
              "codigoPais": "CU"
          },
          {
              "indicativo": "54",
              "codigoPais": "AR"
          },
          {
              "indicativo": "55",
              "codigoPais": "BR"
          },
          {
              "indicativo": "56",
              "codigoPais": "CL"
          },
          {
              "indicativo": "57",
              "codigoPais": "CO"
          },
          {
              "indicativo": "58",
              "codigoPais": "VE"
          },
          {
              "indicativo": "590",
              "codigoPais": "BL"
          },
          {
              "indicativo": "590",
              "codigoPais": "GP"
          },
          {
              "indicativo": "590",
              "codigoPais": "MF"
          },
          {
              "indicativo": "591",
              "codigoPais": "BO"
          },
          {
              "indicativo": "592",
              "codigoPais": "GY"
          },
          {
              "indicativo": "593",
              "codigoPais": "EC"
          },
          {
              "indicativo": "594",
              "codigoPais": "GF"
          },
          {
              "indicativo": "595",
              "codigoPais": "PY"
          },
          {
              "indicativo": "596",
              "codigoPais": "MQ"
          },
          {
              "indicativo": "597",
              "codigoPais": "SR"
          },
          {
              "indicativo": "598",
              "codigoPais": "UY"
          },
          {
              "indicativo": "599",
              "codigoPais": "BQ"
          },
          {
              "indicativo": "599",
              "codigoPais": "CW"
          },
          {
              "indicativo": "599",
              "codigoPais": "SX"
          },
          {
              "indicativo": "60",
              "codigoPais": "MY"
          },
          {
              "indicativo": "61",
              "codigoPais": "CC"
          },
          {
              "indicativo": "61",
              "codigoPais": "CX"
          },
          {
              "indicativo": "61",
              "codigoPais": "AU"
          },
          {
              "indicativo": "62",
              "codigoPais": "ID"
          },
          {
              "indicativo": "63",
              "codigoPais": "PH"
          },
          {
              "indicativo": "64",
              "codigoPais": "NZ"
          },
          {
              "indicativo": "65",
              "codigoPais": "SG"
          },
          {
              "indicativo": "66",
              "codigoPais": "TH"
          },
          {
              "indicativo": "670",
              "codigoPais": "TL"
          },
          {
              "indicativo": "672",
              "codigoPais": "NF"
          },
          {
              "indicativo": "673",
              "codigoPais": "BN"
          },
          {
              "indicativo": "674",
              "codigoPais": "NR"
          },
          {
              "indicativo": "675",
              "codigoPais": "PG"
          },
          {
              "indicativo": "676",
              "codigoPais": "TO"
          },
          {
              "indicativo": "677",
              "codigoPais": "SB"
          },
          {
              "indicativo": "678",
              "codigoPais": "VU"
          },
          {
              "indicativo": "679",
              "codigoPais": "FJ"
          },
          {
              "indicativo": "680",
              "codigoPais": "PW"
          },
          {
              "indicativo": "681",
              "codigoPais": "WF"
          },
          {
              "indicativo": "682",
              "codigoPais": "CK"
          },
          {
              "indicativo": "683",
              "codigoPais": "NU"
          },
          {
              "indicativo": "685",
              "codigoPais": "WS"
          },
          {
              "indicativo": "686",
              "codigoPais": "KI"
          },
          {
              "indicativo": "687",
              "codigoPais": "NC"
          },
          {
              "indicativo": "688",
              "codigoPais": "TV"
          },
          {
              "indicativo": "689",
              "codigoPais": "PF"
          },
          {
              "indicativo": "690",
              "codigoPais": "TK"
          },
          {
              "indicativo": "691",
              "codigoPais": "FM"
          },
          {
              "indicativo": "692",
              "codigoPais": "MH"
          },
          {
              "indicativo": "7",
              "codigoPais": "RU"
          },
          {
              "indicativo": "7",
              "codigoPais": "KZ"
          },
          {
              "indicativo": "81",
              "codigoPais": "JP"
          },
          {
              "indicativo": "82",
              "codigoPais": "KR"
          },
          {
              "indicativo": "84",
              "codigoPais": "VN"
          },
          {
              "indicativo": "850",
              "codigoPais": "KP"
          },
          {
              "indicativo": "852",
              "codigoPais": "HK"
          },
          {
              "indicativo": "853",
              "codigoPais": "MO"
          },
          {
              "indicativo": "855",
              "codigoPais": "KH"
          },
          {
              "indicativo": "856",
              "codigoPais": "LA"
          },
          {
              "indicativo": "86",
              "codigoPais": "CN"
          },
          {
              "indicativo": "870",
              "codigoPais": "PN"
          },
          {
              "indicativo": "880",
              "codigoPais": "BD"
          },
          {
              "indicativo": "886",
              "codigoPais": "TW"
          },
          {
              "indicativo": "90",
              "codigoPais": "TR"
          },
          {
              "indicativo": "91",
              "codigoPais": "IN"
          },
          {
              "indicativo": "92",
              "codigoPais": "PK"
          },
          {
              "indicativo": "93",
              "codigoPais": "AF"
          },
          {
              "indicativo": "94",
              "codigoPais": "LK"
          },
          {
              "indicativo": "95",
              "codigoPais": "MM"
          },
          {
              "indicativo": "960",
              "codigoPais": "MV"
          },
          {
              "indicativo": "961",
              "codigoPais": "LB"
          },
          {
              "indicativo": "962",
              "codigoPais": "JO"
          },
          {
              "indicativo": "963",
              "codigoPais": "SY"
          },
          {
              "indicativo": "964",
              "codigoPais": "IQ"
          },
          {
              "indicativo": "965",
              "codigoPais": "KW"
          },
          {
              "indicativo": "966",
              "codigoPais": "SA"
          },
          {
              "indicativo": "967",
              "codigoPais": "YE"
          },
          {
              "indicativo": "968",
              "codigoPais": "OM"
          },
          {
              "indicativo": "970",
              "codigoPais": "PS"
          },
          {
              "indicativo": "971",
              "codigoPais": "AE"
          },
          {
              "indicativo": "972",
              "codigoPais": "IL"
          },
          {
              "indicativo": "973",
              "codigoPais": "BH"
          },
          {
              "indicativo": "974",
              "codigoPais": "QA"
          },
          {
              "indicativo": "975",
              "codigoPais": "BT"
          },
          {
              "indicativo": "976",
              "codigoPais": "MN"
          },
          {
              "indicativo": "977",
              "codigoPais": "NP"
          },
          {
              "indicativo": "98",
              "codigoPais": "IR"
          },
          {
              "indicativo": "992",
              "codigoPais": "TJ"
          },
          {
              "indicativo": "993",
              "codigoPais": "TM"
          },
          {
              "indicativo": "994",
              "codigoPais": "AZ"
          },
          {
              "indicativo": "995",
              "codigoPais": "GE"
          },
          {
              "indicativo": "996",
              "codigoPais": "KG"
          },
          {
              "indicativo": "998",
              "codigoPais": "UZ"
          }
      ]
      );
    }
     
}