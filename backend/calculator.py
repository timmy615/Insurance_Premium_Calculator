import pandas as pd

class PremiumCalculator:
    def __init__(self, excel_path='mortality_tables.xlsx'):
        self.df_all = pd.read_excel(excel_path, sheet_name='All', engine='openpyxl')
        self.df_male = pd.read_excel(excel_path, sheet_name='Male', engine='openpyxl')
        self.df_female = pd.read_excel(excel_path, sheet_name='Female', engine='openpyxl')

        self.all_rates = {age: {'qx': mortality_rate, 'PVP':PVP, 'AVP':AVP } 
            for age, mortality_rate, PVP, AVP in zip(
                self.df_all.index,
                self.df_all['mortality_rate'],
                self.df_all['PVP'],
                self.df_all['AVP']
            )
        }
        self.male_rates = {age: {'qx': mortality_rate, 'PVP':PVP, 'AVP':AVP } 
            for age, mortality_rate, PVP, AVP in zip(
                self.df_male.index,
                self.df_male['mortality_rate'],
                self.df_male['PVP'],
                self.df_male['AVP']
            )
        }
        self.female_rates = {age: {'qx': mortality_rate, 'PVP':PVP, 'AVP':AVP } 
            for age, mortality_rate, PVP, AVP in zip(
                self.df_female.index,
                self.df_female['mortality_rate'],
                self.df_female['PVP'],
                self.df_female['AVP']
            )
        }
    
    def calculate_term_insurance(self, age, gender, coverage, type):
        if gender == "M":
            PVP = self.male_rates[age]['PVP']
            AVP = self.male_rates[age]['AVP']
            return round(coverage*PVP/AVP)


        elif gender == "F":
            PVP = self.female_rates[age]['PVP']
            AVP = self.female_rates[age]['AVP']
            return round(coverage*PVP/AVP)
        
        else:
            PVP = self.all_rates[age]['PVP']
            AVP = self.all_rates[age]['AVP']
            return round(coverage*PVP/AVP)
        

if __name__ == "__main__":
    calculator = PremiumCalculator("mortality_tables.xlsx")
    print(calculator.calculate_term_insurance(30, "M", 1000000, 3))