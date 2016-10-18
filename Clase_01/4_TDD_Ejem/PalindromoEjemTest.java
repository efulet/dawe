import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class PalindromoEjemTest {
	
	PalindromoEjem testObject;
	
	@Before
	public void setUp() throws Exception {
		testObject = new PalindromoEjem();
	}

	@Test
	public void testCreatePalindromoObject() throws Exception {
		assertNotNull(testObject);
	}
	
	@Test
	public void testPalindromoEjem_siPalindromo() throws Exception {
		assertTrue(testObject.esPalindromo("reconocer"));
	}
	
	@Test
	public void testPalindromoEjem_noPalindromo() throws Exception {
		assertFalse(testObject.esPalindromo("hola")); // no es palindromo
	}
	
	@Test
	public void testPalindromoEjem_noPalindromo2() throws Exception {
		assertFalse(testObject.esPalindromo("adiosmundocruel")); // no es palindromo
	}
	
	@Test
	public void testPalindromoEjem_siPalindromo2() throws Exception {
		// newen del mapudungun que significa "energia del universo"
		// si tambien es palindromo!
		assertTrue(testObject.esPalindromo("newen"));
	}

}
