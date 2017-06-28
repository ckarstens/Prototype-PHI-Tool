import os,datetime

#times = [1306267585,1306268096,1306268350,1306268605,1306268863,1306269118,1306269374,1306269628,1306270139,1306270653,1306270909,1306271163,1306271418,1306271672,1306271928,1306272440,1306272695,1306272950,1306273204,1306273459,1306273713,1306273968,1306274224]
#times = [1306273204,1306273459,1306273713,1306273968,1306274224]
times = [1306269628]

for t in times:
	start = datetime.datetime.utcnow()
	cmd = 'python engine.py -i 20110524/Tornado1_ID0_Karstens.txt -t ' + str(t) + ' -g'
	#print cmd
	os.system(cmd)
	end = datetime.datetime.utcnow()
	diff = end - start
	print diff.seconds
	#break
