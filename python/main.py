
f = open('./components/test.txt', "r")
text = f.read();
text_split = text.split()

print("Antes: ")

for x in text_split:
    print(x)

text = text.replace("Estoy", "Esto")
text_split = text.split()
print("Despues: ")

for x in text_split:
    print(x)
