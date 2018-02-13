<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation as JMS;


/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 * @JMS\ExclusionPolicy("none")
 */
class User implements UserInterface
{
    /**
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, unique=true)
     *
     */
    private $email;


    /**
     * @var string
     *
     * @ORM\Column(name="roles", type="json_array")
     * @JMS\Exclude
     */
    private $roles;

    /**
     * The below length depends on the "algorithm" you use for encoding
     * the password, but this works well with bcrypt.
     *
     * @ORM\Column(type="string", length=64)
     * @JMS\Exclude
     */
    private $password;

    /**
     * @Assert\NotBlank()
     * @Assert\Length(max=4096)
     * @JMS\Exclude
     */
    private $plainPassword;

    /**
     * @ORM\Column(type="integer")
     */
    private $passport_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $passport_pass;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $surname;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_code;

    /**
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Organisations")
     * @JMS\Exclude
     * @ORM\JoinColumn(name="organisation_id")
     */
    private $organisation;

    /**
     * @return mixed
     */
    public function getPassportId()
    {
        return $this->passport_id;
    }

    /**
     * @param mixed $passport_id
     */
    public function setPassportId($passport_id)
    {
        $this->passport_id = $passport_id;
    }

    /**
     * @return mixed
     */
    public function getPassportPass()
    {
        return $this->passport_pass;
    }

    /**
     * @param mixed $passport_pass
     */
    public function setPassportPass($passport_pass)
    {
        $this->passport_pass = $passport_pass;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * @param mixed $surname
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;
    }

    /**
     * @return mixed
     */
    public function getIdCode()
    {
        return $this->id_code;
    }

    /**
     * @param mixed $id_code
     */
    public function setIdCode($id_code)
    {
        $this->id_code = $id_code;
    }



   public function  __construct($roles = ["ROLE_USER"]){
        $this->roles = $roles;


}




    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    public function setPlainPassword($password)
    {
        $this->plainPassword = $password;
    }


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Returns the roles granted to the user.
     *
     * <code>
     * public function getRoles()
     * {
     *     return array('ROLE_USER');
     * }
     * </code>
     *
     * Alternatively, the roles might be stored on a ``roles`` property,
     * and populated in any number of different ways when the user object
     * is created.
     *
     * @return (Role|string)[] The user roles
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {

    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string The username
     */
    public function getUsername(){
        return $this->email;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {

    }

    /**
     * Set roles
     *
     * @param string $roles
     *
     * @return User
     */
    public function setRoles($roles)
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * Set organisation
     *
     * @param \AppBundle\Entity\Organisations $organisation
     *
     * @return User
     */
    public function setOrganisation(\AppBundle\Entity\Organisations $organisation = null)
    {
        $this->organisation = $organisation;

        return $this;
    }

    /**
     * Get organisation
     *
     * @return \AppBundle\Entity\Organisations
     *
     */
    public function getOrganisation()
    {
        return $this->organisation;
    }
}
