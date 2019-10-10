from datetime import datetime, timedelta

def getDateFormat(dte = None, delta = 0):
    '''
    Returns the current date and time in the format required for Datetime. 
    delta : the days before the current date, you want the date
    '''
    
    if dte is not None:
        return str(dte.timestamp()*1000)
    else:
        return str((datetime.now() - timedelta(days = delta )).timestamp()*1000)


def convertToDatetime(ms):
    ''' milleseconds to datetime object '''
    return datetime.fromtimestamp(ms/1000.0)