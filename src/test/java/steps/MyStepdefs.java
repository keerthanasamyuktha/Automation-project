package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class MyStepdefs {

    WebDriver driver;

    @Given("^User logs into the application using valid username and password$")
    public void userLoginToTheApplicationUsingTheCredentials() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Users\\k.ravi.lakshmanan\\IdeaProjects\\Automation-project\\Setup\\Drivers\\chromedriver.exe");

        driver = new ChromeDriver();
        driver.get("https://stirling.she-development.net/automation");
        driver.findElement(By.id("username")).sendKeys("KeerthanaR");
        driver.findElement(By.id("password")).sendKeys("KeerthanaR1234^");
        driver.findElement(By.id("login")).click();
    }

    @And("^navigate to the module$")
    public void navigateToTheModule() {
        driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[2]/div[2]/div[2]/div/ul/li[1]/a")).click();

    }

    @And("^hover over 'Environment' and select 'release To Water'$")
    public void hoverOverEnvironmentAndSelectReleaseToWater() {
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[2]/div[2]/div[2]/div/ul/li[1]/ul/li[9]/a[1]"))).perform();
        driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[2]/div[2]/div[2]/div/ul/li[1]/ul/li[9]/ul/li[3]/a[1]")).click();
    }

    @When("^user clicks on new record button and enter sample date and description fields$")
    public void userClicksOnNewRecordButtonAndEnterSampleDateAndDescriptionFields() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"site-wrapper\"]/section/a")).click();
        driver.findElement(By.id("SheReleaseToWater_Description")).sendKeys("sample test 1");
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("window.scrollBy(0,500)");
        Thread.sleep(2000);
        jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        driver.findElement(By.id("SheReleaseToWater_SampleDate")).sendKeys("23/08/2021");



    }

    @And("^clicks on Click Save and Close button$")
    public void clicksOnClickSaveAndCloseButton() throws InterruptedException {
        Thread.sleep(3000);
        driver.findElement(By.name("submitButton")).click();
    }


}

