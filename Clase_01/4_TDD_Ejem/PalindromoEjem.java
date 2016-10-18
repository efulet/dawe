
public class PalindromoEjem {

	public boolean esPalindromo(String string) {
		return string.equalsIgnoreCase(getReverseString(string));
	}
	
	private String getReverseString(String string) {
		StringBuffer reverseStringBuffer = new StringBuffer(string);
		reverseStringBuffer.reverse();
		return reverseStringBuffer.toString();
	}
	
}
