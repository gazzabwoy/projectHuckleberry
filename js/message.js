        function WriteToFile(passForm)
{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("projectHuckleberry-main\text\messages.txt", true);
s.WriteLine(document.passForm.input.value);
s.Close();
}